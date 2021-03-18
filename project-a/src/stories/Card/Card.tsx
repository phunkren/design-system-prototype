import * as React from 'react';
import {CardProps } from './Card.d';
import './card.css';

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