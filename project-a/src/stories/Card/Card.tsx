import * as React from 'react';
import {CardProps, CardTitleProps, CardSubtitleProps } from './Card.d';

/**
 * Primary UI component for user interaction
 */
export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  ...props
}) => <h2 className='title' {...props}>{children}</h2>;

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  ...props
}) => <p className='copy' {...props}>{children}</p>;

export const Card: React.FC<CardProps> = ({
  children,
  variant, 
  ...props
}) => {
  const variantClassname = variant ? `card--${variant}` : null;

  return (
    <div className={['card', variantClassname].join(' ')} {...props}>
      {children}
    </div>
  );
};