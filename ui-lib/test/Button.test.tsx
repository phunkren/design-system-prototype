import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

//👇 Imports specific stories for the test
import {
  TemplatePrimary,
  TemplateSecondary,
} from '../src/stories/Button.stories';

test('renders a primary button', () => {
  const { label = 'test primary', ...args } = TemplatePrimary.args || {};
  render(<TemplatePrimary label={label} {...args} />);

  expect(screen.getByRole('button')).toHaveClass('storybook-button--primary');
});

it('renders a secondary button', () => {
  const { label = 'test secondary', ...args } = TemplateSecondary.args || {};
  render(<TemplateSecondary label={label} {...args} />);

  expect(screen.getByRole('button')).toHaveClass('storybook-button--secondary');
});
