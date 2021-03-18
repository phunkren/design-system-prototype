// Types
import { Story, Meta } from '@storybook/react';
import { ButtonProps } from './Button.d';

// Imports
import * as React from 'react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Buttons',
  component: Button,
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/1bzWImSTgy7SEZajf36Zu3/Shipwright-UI-Kit-Community?node-id=20%3A22187',
    },
  },
};

// Template
//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = args => <Button {...args} />;
Template.args = {};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = { ...Template.args, label: 'Secondary' };

export default meta;
