import { HTMLAttributes } from 'react';

export interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'standard' | 'large' | 'small'
}