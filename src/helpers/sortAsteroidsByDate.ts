import { IAsteroid } from '@/models/Asteroid';

export default function sortAsteroidsByDate(asteroids: IAsteroid[]) {
    return [...asteroids].sort(
        (a, b) => a.sortedApproach[0]?.epoch_date_close_approach - b.sortedApproach[0]?.epoch_date_close_approach,
    );
}
