import React from 'react';
import { Search } from '../molecules/search';

export interface IHeader {
  src?: string;
  username?: string;
  usernameClick?: () => void;
  label?: string;
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
}
export const Header = (props: IHeader) => {
  return (
    <div className="flex items-center justify-between w-full absolute top-0 p-4 border-b bg-white -ml-4">
      <Search
        label={props.label}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
      ></Search>
      <button
        className="flex items-center space-x-4"
        onClick={props.usernameClick}
      >
        <img
          width={32}
          height={32}
          className="rounded-full bg-gray-200"
          src={props.src}
        />
        <p>{props.username}</p>
      </button>
    </div>
  );
};
