'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Share2, Edit, Trash2 } from 'lucide-react'

// Mock event data - in a real app, this would come from an API
const mockEvent = {
  id: '1',
  title: 'Tech Conference 2024',
  description: 'Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations. This event will showcase the latest developments in artificial intelligence, machine learning, cloud computing, and more.',
  date: '2024-12-15',
  time: '09:00 AM',
  location: 'Convention Center, Downtown',
  attendees: 45,
  maxAttendees: 100,
  category: 'Technology',
  organizer: 'Tech Events Inc.',
  image: '/api/placeholder/800/400',
  customFields: [
    { label: 'Company', value: 'Optional', required: false },
    { label: 'Job Title', value: 'Optional', required: false },
    { label: 'Dietary Restrictions', value: 'Optional', required: false }
  ]
}

export default function EventDetailPage() {
  const params = useParams()
  const [showShareModal, setShowShareModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const eventId = params.id as string
  const event = mockEvent // In real app, fetch by ID

  const shareUrl = `${window.location.origin}/events/${eventId}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Event Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{event.title}</h1>
              <p className="text-gray-600 mt-2">Organized by {event.organizer}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowShareModal(true)}
                className="btn-secondary flex items-center space-x-2"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <Link href={`/events/${eventId}/edit`} className="btn-primary flex items-center space-x-2">
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </Link>
            </div>
          </div>
          
          <span className="inline-block bg-primary-100 text-primary-800 text-sm px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Image */}
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <Calendar className="w-24 h-24 text-gray-400" />
            </div>

            {/* Description */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Event</h3>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
            </div>

            {/* Custom Fields */}
            {event.customFields.length > 0 && (
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-3">
                  {event.customFields.map((field, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{field.label}</span>
                      <span className="text-sm text-gray-500">
                        {field.required ? 'Required' : 'Optional'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium">{event.date}</p>
                    <p className="text-sm">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-primary-600" />
                  <div>
                    <p className="font-medium">{event.attendees}/{event.maxAttendees} attendees</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${attendancePercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {Math.round(attendancePercentage)}% full
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP Card */}
            <div className="card bg-primary-50 border-primary-200">
              <h3 className="text-lg font-semibold text-primary-900 mb-4">Join This Event</h3>
              <p className="text-primary-700 mb-4">
                {event.attendees < event.maxAttendees 
                  ? `There are ${event.maxAttendees - event.attendees} spots remaining!`
                  : 'This event is full, but you can join the waitlist.'
                }
              </p>
              <Link 
                href={`/events/${eventId}/rsvp`}
                className="btn-primary w-full text-center"
              >
                RSVP Now
              </Link>
            </div>

            {/* Organizer Info */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Organizer</h3>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">
                    {event.organizer.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{event.organizer}</p>
                  <p className="text-sm text-gray-500">Event Organizer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Event</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="input-field flex-1"
                />
                <button
                  onClick={copyToClipboard}
                  className="btn-primary px-4 py-2"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowShareModal(false)}
                  className="btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 