import PropertyCard from './components/PropertyCard'
import SearchForm from './components/SearchForm'

// Mock data for demonstration
const featuredProperties = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown',
    price: 350000,
    location: 'New York, NY',
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
  {
    id: '2',
    title: 'Spacious Family Home',
    price: 550000,
    location: 'Los Angeles, CA',
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
  {
    id: '3',
    title: 'Cozy Studio Near University',
    price: 200000,
    location: 'Boston, MA',
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: '/placeholder.svg?height=400&width=600',
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
        <SearchForm />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>
    </div>
  )
}

