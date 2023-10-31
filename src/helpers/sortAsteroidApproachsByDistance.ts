import { IAsteroidApproachDTO } from '@/models/Asteroid';

export default function sortAsteroidApproachsByDistance(approachs: IAsteroidApproachDTO[]) {
    return [...approachs].sort((a, b) => Number(a.miss_distance.kilometers) - Number(b.miss_distance.kilometers));
}
