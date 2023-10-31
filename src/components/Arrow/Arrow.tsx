import styles from './Arrow.module.css';

export default function Arrow() {
    return (
        <div className={styles.root}>
            <svg
                style={{ width: '100%' }}
                width="126"
                height="6"
                viewBox="0 0 126 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    d="M0 3L5 5.88675L5 0.113249L0 3ZM126 3.00001L121 0.113259L121 5.88676L126 3.00001ZM4.5 3.5L121.5 3.50001L121.5 2.50001L4.5 2.5L4.5 3.5Z"
                    fill="white"
                    fillOpacity="0.5"
                />
            </svg>
        </div>
    );
}
