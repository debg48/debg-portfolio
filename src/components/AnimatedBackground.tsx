import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  return (
    <div className={styles.bgWrapper} aria-hidden="true">
      <div className={styles.warmZone1} />
      <div className={styles.warmZone2} />
    </div>
  );
}
