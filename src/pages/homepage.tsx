import React from 'react';
import { Header } from '../components/organisms/header';

export interface IHomePage {
  src?: string;
  description?: string;
  titleTop?: string;
  titleBottom?: string;
}

export const HomePage = (props: IHomePage) => {
  return (
    <div>
      <Header username="John" src={props.src}></Header>
      <div className="mt-20">
        <p className="font-bold">{props.titleTop}</p>
        <div className="flex w-full space-x-4 my-4">
          <div className="border rounded-lg bg-gray-200 w-1/3 h-40"></div>
          <p className="w-2/3 text-base">{props.description}</p>
        </div>
        <p className="font-bold">{props.titleBottom}</p>
        <div className="flex justify-between space-x-6 my-4">
          <div className="border rounded-lg w-full h-40"></div>
          <div className="border rounded-lg w-full h-40"></div>
          <div className="border rounded-lg w-full h-40"></div>
        </div>
      </div>
    </div>
  );
};
