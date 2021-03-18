// Types
import { Story, Meta } from '@storybook/react';
import { CardProps } from './Card.d';

// Imports
import * as React from 'react';
import { Card } from './Card';
import { CardTitle } from './CardTitle';
import { CardSubtitle } from './CardSubtitle';

import { Title, BoldTitle, SemiboldTitle } from './CardTitle.stories';
import { Subtitle, LargeSubtitle, SmallSubtitle } from './CardSubtitle.stories';

const EX_IMG_SRC = 'https://pbs.twimg.com/media/EfZWI3jX0AgMmWF.jpg';
const EX_IMG_ALT = 'and it went wherever I did go';

const meta: Meta = {
  title: 'Cards',
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
        <Title { ...Title.args }>Card title</Title>
        <Subtitle { ...Subtitle.args }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.</Subtitle>
    </Card>
);

export const ImgTopCard: Story<CardProps> = args => (
    <Card {...args}>
        <img src={EX_IMG_SRC} alt={EX_IMG_ALT} />
        <BoldTitle { ...BoldTitle.args }>Card title</BoldTitle>
        <LargeSubtitle { ...LargeSubtitle.args }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A leo odio magna amet phasellus ultricies urna. Sit nisl blandit rutrum a est in scelerisque.</LargeSubtitle>
    </Card>
);
ImgTopCard.args = { variant: 'imgTop' };

export const RoundedCard: Story<CardProps> = args => (
    <Card {...args}>
        <img src={EX_IMG_SRC} alt={EX_IMG_ALT} />
        <div>
            <SemiboldTitle { ...SemiboldTitle.args }>Heather short</SemiboldTitle>
            <SmallSubtitle { ...SmallSubtitle.args }>(123)456-7890</SmallSubtitle>
        </div>
        {/* <Button label='Call' /> */}
    </Card>
);
RoundedCard.args = { variant: 'rounded' };

export default meta;
