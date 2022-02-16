import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HomePage, IHomePage } from '../../src/pages/homepage';

const meta: Meta = {
  title: 'Pages/Template/Homepage',
  component: HomePage,
  argTypes: {
    src: { control: 'file' },
    description: { control: 'text' },
    titleTop: { control: 'text' },
    titleBottom: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IHomePage> = (args) => <HomePage {...args} />;

export const Homepage = Template.bind({});
Homepage.args = {
  titleTop: 'Title Lorem Ipsum',
  titleBottom: 'Title Image Container',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
