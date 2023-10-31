'use client';
import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import InfiniteScroll from 'react-infinite-scroller';
import Cart from '@/components/Cart/Cart';
import AsteroidCard from '@/components/AsteroidCard/AsteroidCard';
import { INasaNeoApiResponse } from '@/models/NasaNeoApiResponseDTO';
import Spinner from '@/components/Spinner/Spinner';
import { IAsteroid } from '@/models/Asteroid';
import useIsMounted from '@/helpers/useIsMounted';
import { getNearObjects } from '@/services/mock';
import styles from './page.module.css';
import useReffedValue from '@/helpers/useReffedValue';

type AsteroidList = INasaNeoApiResponse & { asteroids: IAsteroid[] };
async function getData(): Promise<AsteroidList> {
    return getNearObjects();
}

export default function Home() {
    const checkMounted = useIsMounted();
    const [data, setData] = useState<AsteroidList>();
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(false);
    const [lunarDistanceType, setLunarDistanceType] = useState(false);

    const loadingRef = useReffedValue(loading);
    const loadMore = useCallback(() => {
        console.log(2);
        console.log(loadingRef.current);

        if (loadingRef.current) {
            return;
        }
        setLoading(true);
        getData()
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
    }, [loadingRef, checkMounted]);

    if (error) {
        throw new Error(String(error));
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
                    initialLoad={true}
                    useWindow={false}
                >
                    <ul>
                        {data?.asteroids.map(asteroid => (
                            <AsteroidCard lunarDistanceType={lunarDistanceType} data={asteroid} key={Math.random()} />
                        ))}
                    </ul>
                </InfiniteScroll>
            </section>
        </main>
    );
}
