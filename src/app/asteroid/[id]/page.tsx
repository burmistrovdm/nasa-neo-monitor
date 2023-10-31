'use client';
import { useEffect } from 'react';
import { DateTime } from 'luxon';
import { IAsteroidDTO } from '@/models/Asteroid';
import separateThousand from '@/helpers/separateThousand';
import { useRequest } from '@/helpers/useRequest';
import Spinner from '@/components/Spinner/Spinner';
import styles from './page.module.css';
import { getNeoById } from '@/services/mock';

async function getData(id: string): Promise<IAsteroidDTO> {
    return getNeoById(id);
}

export default function Asteroid({ params: { id } }: { params: { id: string } }) {
    const [load, data, loading, error] = useRequest(getData);
    useEffect(() => {
        load(id);
    }, [id, load]);

    if (error) {
        console.error(error);
        return null;
    }

    return (
        <main className={styles.main}>
            {loading && <Spinner className={styles.spinner} />}
            <h1 className={styles.title}>{data?.name.replace(/[()]/g, '')}</h1>
            <article className={styles.data}>
                {data?.is_potentially_hazardous_asteroid && <div className={styles.danger}>⚠️ Опасен</div>}
                {!loading && <div className={styles.listTitle}>Сближения астероида с Землёй:</div>}
                <ul className={styles.closeList}>
                    {data?.close_approach_data.map(
                        ({ epoch_date_close_approach, relative_velocity, miss_distance }) => (
                            <li className={styles.close} key={epoch_date_close_approach}>
                                <h3 className={styles.date}>
                                    {DateTime.fromMillis(epoch_date_close_approach)
                                        .toFormat('d LLL yyyy T', {
                                            locale: 'ru',
                                        })
                                        .replace('.', '')}
                                </h3>
                                <div className={styles.speed}>
                                    Скорость: {separateThousand(parseInt(relative_velocity.kilometers_per_hour))} км/ч
                                </div>
                                <div className={styles.distance}>
                                    Дистанция: {separateThousand(parseInt(miss_distance.kilometers))} км
                                </div>
                            </li>
                        ),
                    )}
                </ul>
            </article>
        </main>
    );
}
