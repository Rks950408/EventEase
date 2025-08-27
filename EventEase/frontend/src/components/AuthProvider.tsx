'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'staff' | 'event_owner'
  createdAt: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const token = localStorage.getItem('eventease_token')
    if (token) {
      // In a real app, validate token with backend
      const userData = localStorage.getItem('eventease_user')
      if (userData) {
        try {
          setUser(JSON.parse(userData))
        } catch (error) {
          console.error('Error parsing user data:', error)
        }
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, make API call to backend
      // For demo purposes, simulate successful login
      const mockUser: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: 'event_owner',
        createdAt: new Date().toISOString()
      }
      
      setUser(mockUser)
      localStorage.setItem('eventease_token', 'mock_token')
      localStorage.setItem('eventease_user', JSON.stringify(mockUser))
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const register = async (email: string, password: string, name: string) => {
    try {
      // In a real app, make API call to backend
      // For demo purposes, simulate successful registration
      const mockUser: User = {
        id: '1',
        email,
        name,
        role: 'event_owner',
        createdAt: new Date().toISOString()
      }
      
      setUser(mockUser)
      localStorage.setItem('eventease_token', 'mock_token')
      localStorage.setItem('eventease_user', JSON.stringify(mockUser))
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('eventease_token')
    localStorage.removeItem('eventease_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 