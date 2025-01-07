import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PropertyCardProps {
  id: string
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  imageUrl: string
}

export default function PropertyCard({ id, title, price, location, bedrooms, bathrooms, imageUrl }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-primary font-bold">${price.toLocaleString()}</p>
        <p className="text-gray-600">{location}</p>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>{bedrooms} beds</span>
          <span>{bathrooms} baths</span>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}

