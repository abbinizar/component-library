import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Search, ISearch } from '../../../src/components/molecules/search';

const meta: Meta = {
  title: 'Molecule/Search',
  component: Search,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'onChange' },
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ISearch> = (args) => <Search {...args} />;

export const SearchBar = Template.bind({});
SearchBar.args = {
  label: 'Title Input',
};
