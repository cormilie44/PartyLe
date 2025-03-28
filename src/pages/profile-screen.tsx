import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card"
import Button from "/components/ui/button"
import { ArrowRight } from 'lucide-react'

// Mock data for user profile and events
const mockUserProfile = {
  id: 1,
  username: "johndoe",
  bio: "Nightlife enthusiast",
  eventsCreated: [
    {
      id: 1,
      title: "Nightclub Night",
      date: "2023-10-15",
    },
    {
      id: 2,
      title: "Karaoke Party",
      date: "2023-10-20",
    },
  ],
  eventsJoined: [
    {
      id: 3,
      title: "DJ Night",
      date: "2023-10-25",
    },
  ],
}

interface ProfileScreenProps {
  navigateTo: (screen: 'home' | 'event-details' | 'create-event' | 'profile') => void;
}

export default function ProfileScreen({ navigateTo }: ProfileScreenProps) {
  const [userProfile, setUserProfile] = useState(mockUserProfile)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
      </header>

      <Card className="bg-gray-800 text-white mb-8">
        <CardHeader>
          <CardTitle>{userProfile.username}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{userProfile.bio}</CardDescription>
        </CardContent>
      </Card>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Events Created</h2>
        <div className="space-y-4">
          {userProfile.eventsCreated.map(event => (
            <Card key={event.id} className="bg-gray-700 text-white">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{event.date}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Events Joined</h2>
        <div className="space-y-4">
          {userProfile.eventsJoined.map(event => (
            <Card key={event.id} className="bg-gray-700 text-white">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{event.date}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button variant="outline" className="bg-gray-700 hover:bg-gray-600" onClick={() => navigateTo('home')}>
        Back to Home <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}