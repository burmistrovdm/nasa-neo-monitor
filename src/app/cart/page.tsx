'use client';
import { useCartContext } from '@/store/Cart';
import AsteroidCard from '@/components/AsteroidCard/AsteroidCard';
import styles from './page.module.css';
import { useEffect, useRef } from 'react';

export default function Cart() {
    const [asteroidsInCart, setAsteroidsInCart] = useCartContext();
    const asteroidsInCartRef = useRef(asteroidsInCart);
    useEffect(() => {
        return () => {
            setAsteroidsInCart([]);
        };
    }, [setAsteroidsInCart]);
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Заказ отправлен!</h1>
            <section>
                <ul>
                    {asteroidsInCartRef.current.map(asteroid => (
                        <AsteroidCard data={asteroid} inCart key={asteroid.id} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
