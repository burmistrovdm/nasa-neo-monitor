'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DateTime } from 'luxon';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import Cart from '@/components/Cart/Cart';
import AsteroidCard from '@/components/AsteroidCard/AsteroidCard';
import { INasaNeoApiResponse } from '@/models/NasaNeoApiResponseDTO';
import Spinner from '@/components/Spinner/Spinner';
import { IAsteroid } from '@/models/Asteroid';
import useIsMounted from '@/helpers/useIsMounted';
import convertAsteroidsToSorted from '@/helpers/convertAsteroidsToSorted';
import useReffedValue from '@/helpers/useReffedValue';
import styles from './page.module.css';

type AsteroidList = INasaNeoApiResponse & { asteroids: IAsteroid[] };
async function getData(url?: string): Promise<AsteroidList> {
    const startDate = DateTime.now().toFormat('yyyy-MM-dd');
    const endDate = DateTime.now().plus({ days: 1 }).toFormat('yyyy-MM-dd');
    const res = await fetch(
        url ??
            `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json().then((data: INasaNeoApiResponse) => ({
        ...data,
        asteroids: convertAsteroidsToSorted(Object.values(data.near_earth_objects).flat()),
    }));
}

export default function Home() {
    const checkMounted = useIsMounted();
    const [data, setData] = useState<AsteroidList>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(false);
    const [lunarDistanceType, setLunarDistanceType] = useState(false);

    const dataRef = useReffedValue(data);
    const loadMore = useCallback(() => {
        if (loading) {
            return;
        }
        setLoading(true);
        getData(dataRef.current?.links.next.replace('http://', 'https://'))
            .then(res => {
                checkMounted() &&
                    setData(prevState => ({
                        ...(prevState ?? {}),
                        ...res,
                        asteroids: [...(prevState?.asteroids ?? []), ...res.asteroids],
                    }));
            })
            .catch(err => {
                checkMounted() && setError(err);
            })
            .finally(() => {
                checkMounted() && setLoading(false);
            });
    }, [loading, dataRef, checkMounted]);

    const loadMoreRef = useRef(loadMore);
    useEffect(() => loadMoreRef.current(), [loadMoreRef]);

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <main className={styles.main}>
            <Cart />
            <h1 className={styles.title}>Ближайшие подлёты астероидов</h1>
            <div className={styles.lunarDistanceTypeRadioContainer}>
                <span
                    className={cn(styles.lunarDistanceTypeRadio, {
                        [styles.lunarDistanceTypeRadio__selected]: !lunarDistanceType,
                    })}
                    onClick={() => setLunarDistanceType(false)}
                >
                    в километрах
                </span>
                <span> | </span>
                <span
                    className={cn(styles.lunarDistanceTypeRadio, {
                        [styles.lunarDistanceTypeRadio__selected]: lunarDistanceType,
                    })}
                    onClick={() => setLunarDistanceType(true)}
                >
                    в лунных орбитах
                </span>
            </div>
            <section>
                <InfiniteScroll
                    loader={<Spinner className={styles.spinner} />}
                    hasMore={true}
                    loadMore={loadMore}
                    initialLoad={false}
                    useWindow={false}
                    getScrollParent={() => document.body}
                >
                    <ul>
                        {data?.asteroids.map(asteroid => (
                            <AsteroidCard lunarDistanceType={lunarDistanceType} data={asteroid} key={asteroid.id} />
                        ))}
                    </ul>
                </InfiniteScroll>
            </section>
        </main>
    );
}
