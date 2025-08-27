'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Search, Filter } from 'lucide-react'

// Mock data for demonstration
const mockEvents = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and cutting-edge innovations.',
    date: '2024-12-15',
    time: '09:00 AM',
    location: 'Convention Center, Downtown',
    attendees: 45,
    maxAttendees: 100,
    category: 'Technology',
    image: '/api/placeholder/400/200'
  },
  {
    id: '2',
    title: 'Team Building Workshop',
    description: 'Enhance team collaboration and communication through interactive workshops and activities.',
    date: '2024-12-20',
    time: '02:00 PM',
    location: 'Office HQ, Business District',
    attendees: 12,
    maxAttendees: 25,
    category: 'Business',
    image: '/api/placeholder/400/200'
  },
  {
    id: '3',
    title: 'Art Exhibition Opening',
    description: 'Experience the latest contemporary art from local and international artists.',
    date: '2024-12-25',
    time: '06:00 PM',
    location: 'Modern Art Gallery',
    attendees: 78,
    maxAttendees: 150,
    category: 'Arts',
    image: '/api/placeholder/400/200'
  },
  {
    id: '4',
    title: 'Fitness Bootcamp',
    description: 'Get fit with our intensive fitness bootcamp designed for all skill levels.',
    date: '2024-12-30',
    time: '07:00 AM',
    location: 'Central Park',
    attendees: 35,
    maxAttendees: 50,
    category: 'Fitness',
    image: '/api/placeholder/400/200'
  }
]

const categories = ['All', 'Technology', 'Business', 'Arts', 'Fitness', 'Education', 'Social']

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('date')

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'title':
        return a.title.localeCompare(b.title)
      case 'attendees':
        return b.attendees - a.attendees
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-2">
            Discover and join amazing events happening around you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field"
              >
                <option value="date">Sort by Date</option>
                <option value="title">Sort by Title</option>
                <option value="attendees">Sort by Attendees</option>
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        {sortedEvents.length === 0 ? (
          <div className="card text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all events</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedEvents.map((event) => (
              <div key={event.id} className="card hover:shadow-lg transition-shadow duration-200">
                {/* Event Image */}
                <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Calendar className="w-16 h-16 text-gray-400" />
                </div>

                {/* Event Info */}
                <div className="space-y-3">
                  <div>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-2">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees}/{event.maxAttendees} attendees</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-2">
                    <Link 
                      href={`/events/${event.id}`}
                      className="btn-primary flex-1 text-center text-sm py-2"
                    >
                      View Details
                    </Link>
                    <Link 
                      href={`/events/${event.id}/rsvp`}
                      className="btn-secondary flex-1 text-center text-sm py-2"
                    >
                      RSVP
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create Event CTA */}
        <div className="mt-12 text-center">
          <div className="card bg-primary-50 border-primary-200">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Have an event to share?
            </h3>
            <p className="text-primary-700 mb-4">
              Create and manage your own events with EventEase
            </p>
            <Link href="/events/create" className="btn-primary">
              Create Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 