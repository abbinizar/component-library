import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, IButton } from '../../../src/components/atoms/button';

const meta: Meta = {
  title: 'Atom/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    type: { control: { type: 'select', options: ['contained', 'outlined'] } },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  label: 'Button',
  type: 'contained',
};
