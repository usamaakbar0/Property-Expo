'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'

export default function SearchForm() {
  const [location, setLocation] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000000])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log({ location, propertyType, priceRange })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="propertyType">Property Type</Label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger id="propertyType">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Price Range</Label>
        <Slider
          min={0}
          max={1000000}
          step={10000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0].toLocaleString()}</span>
          <span>${priceRange[1].toLocaleString()}</span>
        </div>
      </div>
      <Button type="submit" className="w-full">Search</Button>
    </form>
  )
}

