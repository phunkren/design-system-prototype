import * as React from 'react';
import {CardTitleProps } from './CardTitle.d';
import './cardTitle.css';
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