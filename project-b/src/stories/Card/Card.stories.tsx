// Types
import { Story, Meta } from '@storybook/react';
import { StandardCardProps } from './Card.d';

// Imports
import * as React from 'react';
import { StandardCard } from './Card';

const meta: Meta = {
  title: 'Cards',
  component: StandardCard,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1bzWImSTgy7SEZajf36Zu3/Shipwright-UI-Kit-Community?node-id=62%3A0',
    },
  },
};

export const Standard: Story<StandardCardProps> = args => (
    <StandardCard {...args} />
);
Standard.args = {
    title: 'Card title',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.'
}

export default meta;
