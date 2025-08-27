// Shared types between frontend and backend

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxAttendees?: number;
  category?: string;
  imageUrl?: string;
  status: EventStatus;
  createdAt: string;
  updatedAt: string;
  organizerId: string;
  organizer: User;
  customFields: CustomField[];
  _count?: {
    rsvps: number;
  };
}

export interface CustomField {
  id: string;
  label: string;
  type: string;
  required: boolean;
  options?: string;
}

export interface RSVP {
  id: string;
  status: RSVPStatus;
  createdAt: string;
  updatedAt: string;
  userId: string;
  eventId: string;
  user: User;
  event: Event;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  maxAttendees?: string;
  category?: string;
  customFields?: Array<{
    label: string;
    type: string;
    required: boolean;
    options?: string;
  }>;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role?: UserRole;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: any[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export enum UserRole {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  EVENT_OWNER = 'EVENT_OWNER'
}

export enum EventStatus {
  ACTIVE = 'ACTIVE',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
  DRAFT = 'DRAFT'
}

export enum RSVPStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  DECLINED = 'DECLINED',
  CANCELLED = 'CANCELLED'
}

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    PROFILE: '/api/auth/profile',
  },
  EVENTS: {
    LIST: '/api/events',
    CREATE: '/api/events',
    GET: (id: string) => `/api/events/${id}`,
    UPDATE: (id: string) => `/api/events/${id}`,
    DELETE: (id: string) => `/api/events/${id}`,
  },
  USERS: {
    LIST: '/api/users',
    GET: (id: string) => `/api/users/${id}`,
    UPDATE_ROLE: (id: string) => `/api/users/${id}/role`,
  },
  RSVPS: {
    CREATE: '/api/rsvps',
    UPDATE: (id: string) => `/api/rsvps/${id}`,
    DELETE: (id: string) => `/api/rsvps/${id}`,
    GET_BY_EVENT: (eventId: string) => `/api/rsvps/event/${eventId}`,
  },
} as const; 