// Types
import { Story, Meta } from '@storybook/react';
import { CardProps } from './Card.d';

// Imports
import * as React from 'react';
import { Card, CardTitle, CardSubtitle } from './Card';

const EX_IMG_SRC = 'https://pbs.twimg.com/media/EfZWI3jX0AgMmWF.jpg';
const EX_IMG_ALT = 'and it went wherever I did go';

const meta: Meta = {
  title: 'Buttons',
  component: Card,
  subcomponents: { CardTitle, CardSubtitle },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1bzWImSTgy7SEZajf36Zu3/Shipwright-UI-Kit-Community?node-id=79%3A21764',
    },
  },
};

export const StandardCard: Story<CardProps> = args => (
    <Card {...args}>
        <CardTitle>Card title</CardTitle>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.</p>
    </Card>
);

export const ImgTopCard: Story<CardProps> = args => (
    <Card variant='imgTop' {...args}>
        <img src={EX_IMG_SRC} alt={EX_IMG_ALT} />
        <CardTitle>Card title</CardTitle>
        <CardSubtitle />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.</p>
    </Card>
);

export const RoundedCard: Story<CardProps> = args => (
    <Card variant='rounded' {...args}>
        <img src={EX_IMG_SRC} alt={EX_IMG_ALT} />
        <div>
            <CardTitle>Heather short</CardTitle>
            <CardSubtitle>(123)456-7890</CardSubtitle>
        </div>
        {/* <Button label='Call' /> */}
    </Card>
);

export default meta;
