import React from 'react';

export interface IButton {
  label?: string;
  type?: 'contained' | 'outlined';
  onClick?: () => void;
}

export const Button = (props: IButton) => {
  let colored;
  switch (props.type) {
    case 'contained':
      colored = 'bg-sky-400 text-white';
      break;
    case 'outlined':
      colored = 'border border-sky-400 bg-white text-gray-800';
      break;
    default:
      break;
  }
  return (
    <button onClick={props.onClick} className={`px-4 rounded h-10 ${colored}`}>
      {props.label}
    </button>
  );
};
