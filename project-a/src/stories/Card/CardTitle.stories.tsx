import { Story, Meta } from '@storybook/react/types-6-0';
import { CardTitleProps } from './CardTitle.d';

import * as React from 'react';
import { CardTitle } from './CardTitle';

export default {
  title: 'Cards/Title',
  component: CardTitle,
} as Meta;

export const Title: Story<CardTitleProps> = (args) => <CardTitle {...args} />;
Title.args = { children: 'title'};

export const BoldTitle = Title.bind({});
BoldTitle.args = { children: 'bold title', variant: 'bold'};

export const SemiboldTitle = Title.bind({});
SemiboldTitle.args = { children: 'semibold title', variant: 'semibold'};