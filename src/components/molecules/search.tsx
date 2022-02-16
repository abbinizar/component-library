import React from 'react';
import { Button } from '../atoms/button';
import { Input } from '../atoms/input';

export interface ISearch {
  label?: string;
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
}

export const Search = (props: ISearch) => {
  return (
    <div className="flex items-end space-x-4">
      <Input
        type="text"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
        label={props.label}
      ></Input>
      <Button label="Search" type="contained" onClick={props.onClick}></Button>
    </div>
  );
};
