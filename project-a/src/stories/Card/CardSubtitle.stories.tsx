import { Story, Meta } from '@storybook/react/types-6-0';
import { CardSubtitleProps } from './CardSubtitle.d';

import * as React from 'react';
import { CardSubtitle } from './CardSubtitle';

export default {
  title: 'Cards/Subtitle',
  component: CardSubtitle,
} as Meta;

export const Subtitle: Story<CardSubtitleProps> = ({children, ...args}) => (
  <CardSubtitle {...args}>{children}</CardSubtitle>
);
Subtitle.args = { children: 'subtitle'};

export const LargeSubtitle = Subtitle.bind({});
LargeSubtitle.args = { children: 'large subtitle', variant: 'large'};

export const SmallSubtitle = Subtitle.bind({});
SmallSubtitle.args = { children: 'small subtitle',variant: 'small'};