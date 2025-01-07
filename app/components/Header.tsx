import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Property Expo
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/search" className="text-gray-600 hover:text-primary">Search</Link></li>
            <li><Link href="/post-ad" className="text-gray-600 hover:text-primary">Post Ad</Link></li>
            <li><Button variant="outline">Login</Button></li>
            <li><Button>Sign Up</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

