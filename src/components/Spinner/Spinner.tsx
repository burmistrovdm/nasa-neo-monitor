import cn from 'classnames';
import styles from './Spinner.module.css';

const Spinner = ({ className }: { className?: string }) => (
    <div className={cn(styles.root, className)}>
        <div className={styles.spinner} />
    </div>
);

export default Spinner;
