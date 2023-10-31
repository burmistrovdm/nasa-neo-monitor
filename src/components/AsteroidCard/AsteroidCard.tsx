'use client';
import Image from 'next/image';
import Link from 'next/link';
import { memo, useCallback } from 'react';
import cn from 'classnames';
import { DateTime } from 'luxon';
import { useCartContext } from '@/store/Cart';
import { IAsteroid } from '@/models/Asteroid';
import countFormatter from '@/helpers/countFormatter';
import separateThousand from '@/helpers/separateThousand';
import Arrow from '../Arrow/Arrow';
import styles from './AsteroidCard.module.css';

const AsteroidCard = memo(function AsteroidCard({
    data,
    inCart,
    lunarDistanceType = true,
}: {
    data: IAsteroid;
    inCart?: boolean;
    lunarDistanceType?: boolean;
}) {
    const [asteroidsInCart, setAsteroidsInCart] = useCartContext();
    const asteroidInCart = asteroidsInCart.some(({ id }) => id === data.id);
    const closestApproach = data.sortedApproach[0];
    const dateStr = DateTime.fromMillis(closestApproach?.epoch_date_close_approach)
        .toFormat('d LLL yyyy', { locale: 'ru' })
        .replace('.', '');
    const distance = lunarDistanceType
        ? `${parseInt(closestApproach?.miss_distance.lunar)} ${countFormatter(
              parseInt(closestApproach?.miss_distance.lunar),
              ['лунная орбита', 'лунные орбиты', 'лунных орбит'],
          )}`
        : `${separateThousand(parseInt(closestApproach?.miss_distance.kilometers))} км`;
    const diameter = data.estimated_diameter.meters.estimated_diameter_max;
    const diameterStr = `${separateThousand(Math.floor(diameter))} м`;

    const toggleAsteroidInCard = useCallback(() => {
        setAsteroidsInCart(_prevstate =>
            asteroidInCart ? _prevstate.filter(({ id }) => id !== data.id) : [..._prevstate, data],
        );
    }, [asteroidInCart, setAsteroidsInCart, data]);
    const sizeDivider = Math.max(Math.min(1, data.estimated_diameter.kilometers.estimated_diameter_max / 2), 0.25);
    const size = Math.round(16 * 2.5 * sizeDivider);

    return (
        <li className={styles.root}>
            <div className={styles.date}>{dateStr}</div>
            <div className={styles.data}>
                <div className={styles.distance}>
                    <span className={styles.distanceValue}>{distance}</span>
                    <Arrow />
                </div>
                <Image className={styles.asterImg} alt="asteroid" width={size} height={size} src="/aster.png" />
                <div className={styles.nameSize}>
                    <Link className={styles.name} href={`/asteroid/${data.id}`}>
                        {data.name.replace(/[()]/g, '')}
                    </Link>
                    <div className={styles.size}>Ø {diameterStr}</div>
                </div>
            </div>
            <div className={styles.footer}>
                {!inCart && (
                    <div role="button" className={cn(styles.cartButton)} onClick={toggleAsteroidInCard}>
                        {asteroidInCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
                    </div>
                )}
                {data.is_potentially_hazardous_asteroid && <div className={styles.danger}>⚠️ Опасен</div>}
            </div>
        </li>
    );
});

export default AsteroidCard;
