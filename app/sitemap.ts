import { MetadataRoute } from 'next'
import { getTrips } from '@/lib/trips'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gomates.in'
  const trips = await getTrips()

  const tripUrls = trips.map((trip) => ({
    url: `${baseUrl}/trips/${trip.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...tripUrls,
  ]
}
