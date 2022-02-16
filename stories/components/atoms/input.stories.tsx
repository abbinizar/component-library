import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, IInput } from '../../../src/components/atoms/input';

const meta: Meta = {
  title: 'Atom/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'number'] } },
    onChange: { action: 'onChange' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IInput> = (args) => <Input {...args} />;

export const InputPrimary = Template.bind({});
InputPrimary.args = {
  label: 'Title Input',
  type: 'text',
  placeholder: 'Placeholder',
};
