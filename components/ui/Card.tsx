import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  hover?: boolean;
  glass?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = false,
  glass = true,
  className = '',
}: CardProps) {
  const classes = [
    styles.card,
    glass && styles.glass,
    hover && styles.hover,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
}
