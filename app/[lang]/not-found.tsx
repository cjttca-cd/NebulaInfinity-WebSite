import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          404
        </h1>
        <h2 className={styles.subtitle}>
          <span className={styles.ja}>ページが見つかりません</span>
          <span className={styles.en}>Page Not Found</span>
        </h2>
        <p className={styles.description}>
          <span className={styles.ja}>
            お探しのページは削除されたか、名前が変更された可能性があります。
          </span>
          <span className={styles.en}>
            The page you are looking for might have been removed or is temporarily unavailable.
          </span>
        </p>
        <div className={styles.actions}>
          <Link href="/ja/">
            <Button size="lg">日本語ホームページ</Button>
          </Link>
          <Link href="/en/">
            <Button size="lg" variant="outline">
              English Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
