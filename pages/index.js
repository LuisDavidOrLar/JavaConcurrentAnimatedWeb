import Image from 'next/image'
import HeroSection from '../app/components/HeroSection'
import SideNavbar from '../app/components/SideNavbar.jsx'
import PageTransition from '../app/components/PageTransition';
export default function Home() {
  return (
    <PageTransition>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <SideNavbar />
    <div className= "container mt-24 mx-auto px-12 py-4">
      <HeroSection />
    </div>
    </main>
    </PageTransition>
  )
}
