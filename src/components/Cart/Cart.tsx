'use client';
import Link from 'next/link';
import { useCartContext } from '@/store/Cart';
import countFormatter from '@/helpers/countFormatter';
import styles from './Cart.module.css';

export default function Cart() {
    const [asteroids] = useCartContext();
    if (!asteroids.length) {
        return;
    }
    return (
        <aside className={styles.root}>
            <div className={styles.title}>
                Корзина
                <div className={styles.count}>
                    {asteroids.length} {countFormatter(asteroids.length, ['астероид', 'астероида', 'астероидов'])}
                </div>
            </div>
            <Link href="/cart">
                <button className={styles.button}>Отправить</button>
            </Link>
        </aside>
    );
}
