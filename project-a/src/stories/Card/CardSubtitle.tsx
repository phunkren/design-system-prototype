import * as React from 'react';
import {CardSubtitleProps } from './CardSubtitle.d';
import './cardSubtitle.css';

/**
 * Primary UI component for user interaction
 */
export const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  variant = 'standard',
  ...props
}) => {
  const variantClassname = `subtitle--${variant}`;
  return <p className={['subtitle', variantClassname].join(' ')} {...props}>{children}</p>;
};