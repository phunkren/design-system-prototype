import { HTMLAttributes } from 'react';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: 'standard' | 'bold' | 'semibold'
}