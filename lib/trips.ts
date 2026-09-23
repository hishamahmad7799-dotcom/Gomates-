import { TRIPS_DATA } from '@/data/trips'
import { Trip } from '@/types/trip'

/**
 * Data service layer for trips.
 * Abstracted so that switching to Supabase/PostgreSQL in V2 requires
 * updating only these functions, keeping frontend components untouched.
 */

export async function getTrips(): Promise<Trip[]> {
  // Simulating async getter for future DB compatibility
  return TRIPS_DATA
}

export async function getTripBySlug(slug: string): Promise<Trip | undefined> {
  const trips = await getTrips()
  return trips.find((trip) => trip.slug.toLowerCase() === slug.toLowerCase())
}

export async function getFeaturedTrips(): Promise<Trip[]> {
  const trips = await getTrips()
  return trips.filter((trip) => trip.featured)
}

export async function getAllTripSlugs(): Promise<string[]> {
  const trips = await getTrips()
  return trips.map((trip) => trip.slug)
}
