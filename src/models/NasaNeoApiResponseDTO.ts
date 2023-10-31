import { IAsteroid, IAsteroidDTO } from './Asteroid';

export interface INasaNeoApiResponse {
    links: {
        previous: string;
        self: string;
        next: string;
    };
    element_count: number;
    near_earth_objects: {
        [date: string]: IAsteroidDTO[];
    };
    is_sentry_object: boolean;
}
