import { HTMLAttributes } from 'react';

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: 'standard' | 'bold' | 'semibold'
}

export interface CardSubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'standard' | 'large' | 'small'
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export interface StandardCardProps extends CardProps {
  title: string,
  subtitle: string,
}

export interface ImgTopCardProps extends CardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  subtitle: string,
}

export interface RoundedCardProps extends CardProps {
  imgSrc: string,
  imgAlt: string,
  title: string,
  subtitle: string,
}