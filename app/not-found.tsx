import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>404 ERROR</span>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>
        <div className={styles.actions}>
          <Link href="/ja/">
            <Button size="lg">日本語ホームページへ</Button>
          </Link>
          <Link href="/en/">
            <Button size="lg" variant="outline">
              Go to English Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
