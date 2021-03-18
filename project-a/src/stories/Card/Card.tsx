import * as React from 'react';
import {CardProps, CardTitleProps, CardSubtitleProps } from './Card.d';
import './card.css';
/**
 * Primary UI component for user interaction
 */
export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  variant = 'standard',
  ...props
}) => {
  const variantClassname = `title--${variant}`;
  return <h2 className={['title', variantClassname].join(' ')} {...props}>{children}</h2>;
};

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  variant = 'standard',
  ...props
}) => {
  const variantClassname = `subtitle--${variant}`;
  return <p className={['subtitle', variantClassname].join(' ')} {...props}>{children}</p>;
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'standard', 
  ...props
}) => {
  const variantClassname = `card--${variant}`;

  return (
    <div className={['card', variantClassname].join(' ')} {...props}>
      {children}
    </div>
  );
};