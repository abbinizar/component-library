import React, { useState } from 'react';

export interface IInput {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  type?: string;
  value?: string;
  onChange?: () => void;
  required?: boolean;
  error?: string;
}

export const Input = (props: IInput) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <p className="text-black-nero text-xs mb-2 capitalize">{props.label}</p>
      <div
        className={`flex items-center ${
          props.disabled ? ' bg-gray-200' : 'bg-white'
        } ${
          props.error
            ? 'border-orange-700'
            : isFocus
            ? 'border-sky-400'
            : 'border-gray-800'
        } border py-2 px-3 rounded-lg`}
      >
        <input
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          type={props.type}
          readOnly={props.readonly}
          disabled={props.disabled}
          className="outline-none text-sm w-full"
          placeholder={props.placeholder}
        ></input>
      </div>
      {props.error && (
        <p className="text-orange-700 text-xs mt-2">{props.error}</p>
      )}
    </div>
  );
};
