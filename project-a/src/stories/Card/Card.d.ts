import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'imgTop' | 'rounded'
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: 'imgTop' | 'rounded'
}

export interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'imgTop' | 'rounded'
}