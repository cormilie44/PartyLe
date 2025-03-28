import { useState } from 'react'
import Button from "/components/ui/button"
import Input from "/components/ui/input"
import Label from "/components/ui/label"
import { ArrowRight } from 'lucide-react'

interface CreateEventScreenProps {
  navigateTo: (screen: 'home' | 'event-details' | 'create-event' | 'profile') => void;
}

export default function CreateEventScreen({ navigateTo }: CreateEventScreenProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = () => {
    if (title && description && location && date) {
      // Mock event creation
      const newEvent = {
        id: Date.now(),
        title,
        description,
        location,
        date,
        participants: 0,
        comments: [],
        likes: 0,
      }
      console.log('New Event Created:', newEvent)
      // Navigate back to Home Screen or show success message
      navigateTo('home')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Create Event</h1>
      </header>

      <div className="space-y-4">
        <div>
          <Label htmlFor="title" className="block text-sm font-medium text-gray-400">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event Title"
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <Label htmlFor="description" className="block text-sm font-medium text-gray-400">
            Description
          </Label>
          <Input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event Description"
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <Label htmlFor="location" className="block text-sm font-medium text-gray-400">
            Location
          </Label>
          <Input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Event Location"
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <Label htmlFor="date" className="block text-sm font-medium text-gray-400">
            Date
          </Label>
          <Input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full"
          />
        </div>
        <Button variant="outline" className="bg-gray-700 hover:bg-gray-600" onClick={handleSubmit}>
          Create Event <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}