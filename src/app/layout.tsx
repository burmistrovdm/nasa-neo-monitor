import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Passion_One } from 'next/font/google';
import cn from 'classnames';
import { CartContextProvider } from '@/store/Cart';
import './reset.css';
import './globals.css';
import styles from './layout.module.css';

const p1 = Passion_One({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    display: 'swap',
});
const helvetica = localFont({
    src: [
        {
            path: './fonts/Helvetica.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Helvetica-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    fallback: ['Arial', 'sans-serif'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'ARMAGEDDON 2023',
    description: 'ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={cn(helvetica.className, styles.body)}>
                <header className={styles.header}>
                    <h2 className={cn(p1.className, styles.title)}>
                        <Link className={styles.titleLink} href="/">
                            ARMAGEDDON 2023
                        </Link>
                    </h2>
                    <p className={styles.paragraph}>
                        ООО “Команда им. Б. Уиллиса”.
                        <br />
                        Взрываем астероиды с 1998 года.
                    </p>
                </header>
                <aside className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        draggable={false}
                        fill={true}
                        loading="eager"
                        alt="earth planet"
                        src="/planet.png"
                    />
                </aside>
                <div className={styles.children}>
                    <CartContextProvider>{children}</CartContextProvider>
                </div>
                <footer className={styles.footer}>© Все права и планета защищены</footer>
            </body>
        </html>
    );
}
