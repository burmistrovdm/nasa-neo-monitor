import { IAsteroid, IAsteroidDTO } from '@/models/Asteroid';
import sortAsteroidsByDate from './sortAsteroidsByDate';
import sortAsteroidApproachsByDistance from './sortAsteroidApproachsByDistance';

export default function convertAsteroidsToSorted(asteroids: IAsteroidDTO[]): IAsteroid[] {
    return sortAsteroidsByDate(
        asteroids.map(aster => ({
            ...aster,
            sortedApproach: sortAsteroidApproachsByDistance(aster.close_approach_data),
        })),
    );
}
