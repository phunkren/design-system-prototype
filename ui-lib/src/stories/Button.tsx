// Types
import { FC } from 'react';
import { ButtonProps } from './Button.d';

// Imports
import * as React from 'react';
import './button.css';

export const Button: FC<ButtonProps> = ({
  label,
  primary,
  backgroundColor,
  size = 'medium',
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
