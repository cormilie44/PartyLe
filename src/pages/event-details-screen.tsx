import { useState } from 'react'
import Card, { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import Button from "/components/ui/button"
import { ArrowRight } from 'lucide-react'

// Mock data for event details
const mockEvent = {
  id: 1,
  title: "Nightclub Night",
  description: "Join us for a night of music, drinks, and fun!",
  location: "Downtown Club",
  date: "2023-10-15",
  participants: 50,
  comments: [
    { id: 1, user: "John Doe", text: "Can't wait!" },
    { id: 2, user: "Jane Smith", text: "Sounds great!" },
  ],
  likes: 20,
}

interface EventDetailsScreenProps {
  navigateTo: (screen: 'home' | 'event-details' | 'create-event' | 'profile') => void;
}

export default function EventDetailsScreen({ navigateTo }: EventDetailsScreenProps) {
  const [event, setEvent] = useState(mockEvent)
  const [comment, setComment] = useState('')

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const addComment = () => {
    if (comment.trim()) {
      const newComment = {
        id: event.comments.length + 1,
        user: "You",
        text: comment,
      }
      setEvent({ ...event, comments: [...event.comments, newComment] })
      setComment('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Event Details</h1>
      </header>

      <Card className="bg-gray-800 text-white mb-8">
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
            <p>{event.comments.length} Comments</p>
            <p>{event.likes} Likes</p>
          </div>
          <Button variant="outline" className="bg-gray-700 hover:bg-gray-600" onClick={() => navigateTo('home')}>
            Join Event <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <div className="mb-4">
          <Input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Add a comment..."
            className="mt-1 block w-full"
          />
          <Button variant="outline" className="mt-2 bg-gray-700 hover:bg-gray-600" onClick={addComment}>
            Add Comment
          </Button>
        </div>
        <div className="space-y-4">
          {event.comments.map(comment => (
            <div key={comment.id} className="bg-gray-700 p-4 rounded">
              <p className="font-bold">{comment.user}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}