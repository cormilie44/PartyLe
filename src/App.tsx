import { useState } from 'react'
import HomeScreen from './pages/home-screen'
import EventDetailsScreen from './pages/event-details-screen'
import CreateEventScreen from './pages/create-event-screen'
import ProfileScreen from './pages/profile-screen'

type Screen = 'home' | 'event-details' | 'create-event' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {currentScreen === 'home' && <HomeScreen navigateTo={navigateTo} />}
      {currentScreen === 'event-details' && <EventDetailsScreen navigateTo={navigateTo} />}
      {currentScreen === 'create-event' && <CreateEventScreen navigateTo={navigateTo} />}
      {currentScreen === 'profile' && <ProfileScreen navigateTo={navigateTo} />}
    </div>
  )
}
