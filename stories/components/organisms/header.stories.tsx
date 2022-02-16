import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, IHeader } from '../../../src/components/organisms/header';

const meta: Meta = {
  title: 'Organism/Header',
  component: Header,
  argTypes: {
    username: { control: 'text' },
    src: { control: 'file' },
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'onChange' },
    onClick: { action: 'clicked' },
    usernameClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IHeader> = (args) => <Header {...args} />;

export const HeaderSection = Template.bind({});
HeaderSection.args = {
  username: 'Budi Setiawan',
};
