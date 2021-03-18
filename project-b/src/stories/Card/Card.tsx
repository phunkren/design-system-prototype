import * as React from 'react';
import { CardProps, CardTitleProps, CardSubtitleProps, ImgTopCardProps, StandardCardProps, RoundedCardProps } from './Card.d';
import './card.css';

const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
    <div className={['card', className].join(' ')} {...props}>
      {children}
    </div>
);

const CardTitle: React.FC<CardTitleProps> = ({
  children,
  variant = 'standard',
  ...props
}) => {
  const variantClassname = `title--${variant}`;
  return <h2 className={['title', variantClassname].join(' ')} {...props}>{children}</h2>;
};

const CardSubtitle: React.FC<CardSubtitleProps> = ({
  children,
  variant = 'standard',
  ...props
}) => {
  const variantClassname = `subtitle--${variant}`;
  return <p className={['subtitle', variantClassname].join(' ')} {...props}>{children}</p>;
};

export const StandardCard: React.FC<StandardCardProps> = ({ title, subtitle, ...props }) => (
    <Card className='card--standard' {...props}>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle variant='large'>{subtitle}</CardSubtitle>
    </Card>
);

export const ImgTopCard: React.FC<ImgTopCardProps> = ({ imgAlt, imgSrc, title, subtitle, ...props }) => (
    <Card className='card--imgTop' {...props}>
        <img src={imgSrc} alt={imgAlt} />
        <CardTitle variant='bold'>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
    </Card>
);

export const RoundedCard: React.FC<RoundedCardProps> = ({ imgAlt, imgSrc, title, subtitle, ...props }) => (
    <Card className='card--rounded' {...props}>
        <img src={imgSrc} alt={imgAlt} />
        <div>
            <CardTitle variant='semibold'>Heather short</CardTitle>
            <CardSubtitle variant='small'>(123)456-7890</CardSubtitle>
        </div>
        {/* <Button label='Call' /> */}
    </Card>
);