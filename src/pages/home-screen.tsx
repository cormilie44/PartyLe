import { useState } from 'react'
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import Input from "/components/ui/input"
import Label from "/components/ui/label"
import Button from "/components/ui/button"
import { ArrowRight } from 'lucide-react'

// Mock data for events
const mockEvents = [
  {
    id: 1,
    title: "Nightclub Night",
    description: "Join us for a night of music, drinks, and fun!",
    location: "Downtown Club",
    date: "2023-10-15",
    participants: 50,
    comments: 10,
    likes: 20,
  },
  {
    id: 2,
    title: "Karaoke Party",
    description: "Sing your heart out with friends and strangers!",
    location: "Sunset Lounge",
    date: "2023-10-20",
    participants: 30,
    comments: 5,
    likes: 15,
  },
  {
    id: 3,
    title: "DJ Night",
    description: "Experience the best beats of the decade!",
    location: "Midnight Club",
    date: "2023-10-25",
    participants: 70,
    comments: 20,
    likes: 30,
  },
]

interface HomeScreenProps {
  navigateTo: (screen: 'home' | 'event-details' | 'create-event' | 'profile') => void;
}

export default function HomeScreen({ navigateTo }: HomeScreenProps) {
  const [events, setEvents] = useState(mockEvents)
  const [filter, setFilter] = useState('')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">PartyLe</h1>
        <p className="text-lg text-gray-400">Find and join the best nightlife events!</p>
      </header>

      <div className="mb-4">
        <Label htmlFor="filter" className="block text-sm font-medium text-gray-400">
          Filter Events
        </Label>
        <Input
          id="filter"
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search events..."
          className="mt-1 block w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <Card key={event.id} className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{event.description}</CardDescription>
              <p className="mt-2 text-sm text-gray-400">
                <span className="font-bold">Location:</span> {event.location}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-bold">Date:</span> {event.date}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div className="text-sm text-gray-400">
                <p>{event.participants} Participants</p>
                <p>{event.comments} Comments</p>
                <p>{event.likes} Likes</p>
              </div>
              <Button variant="outline" className="bg-gray-700 hover:bg-gray-600" onClick={() => navigateTo('event-details')}>
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}