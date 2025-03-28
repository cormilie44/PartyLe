import { useState } from 'react'
import Button from "/components/ui/button"
import HomeScreen from './pages/home-screen'
import EventDetailsScreen from './pages/event-details-screen'
import CreateEventScreen from './pages/create-event-screen'
import ProfileScreen from './pages/profile-screen'

export default function App() {
  const [screen, setScreen] = useState<'home' | 'event-details' | 'create-event' | 'profile'>('home')

  const navigateTo = (screen: 'home' | 'event-details' | 'create-event' | 'profile') => {
    setScreen(screen)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">PartyLe</h1>
        <div className="mt-4">
          <Button variant="outline" className="bg-gray-700 hover:bg-gray-600 mr-2" onClick={() => navigateTo('home')}>
            Home
          </Button>
          <Button variant="outline" className="bg-gray-700 hover:bg-gray-600 mr-2" onClick={() => navigateTo('create-event')}>
            Create Event
          </Button>
          <Button variant="outline" className="bg-gray-700 hover:bg-gray-600" onClick={() => navigateTo('profile')}>
            Profile
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {screen === 'home' && <HomeScreen navigateTo={navigateTo} />}
        {screen === 'event-details' && <EventDetailsScreen navigateTo={navigateTo} />}
        {screen === 'create-event' && <CreateEventScreen navigateTo={navigateTo} />}
        {screen === 'profile' && <ProfileScreen navigateTo={navigateTo} />}
      </main>
    </div>
  )
}