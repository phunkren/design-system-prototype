// Types
import { Story, Meta } from '@storybook/react';
import { ImgTopCardProps } from './Card.d';

// Imports
import * as React from 'react';
import { ImgTopCard } from './Card';

const meta: Meta = {
  title: 'Cards/Img Top',
  component: ImgTopCard,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1bzWImSTgy7SEZajf36Zu3/Shipwright-UI-Kit-Community?node-id=62%3A348',
    },
  },
};

export const ImgTop: Story<ImgTopCardProps> = args => (
   <ImgTopCard {...args} />
);

ImgTop.args = {
    title: 'Card title',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.',
    imgAlt: 'and it went wherever I did go',
    imgSrc: 'https://pbs.twimg.com/media/EfZWI3jX0AgMmWF.jpg',
};

export default meta;
