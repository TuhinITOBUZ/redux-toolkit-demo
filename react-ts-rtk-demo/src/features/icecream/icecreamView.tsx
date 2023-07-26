import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const dispatch = useAppDispatch();
  const numberOfIcecreams = useAppSelector(
    (state) => state.icecream.numOfIcecreams
  );
  return (
    <div>
      <h2>Number of ice creams - {numberOfIcecreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order ice cream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(10));
        }}
      >
        Restock ice creams
      </button>
    </div>
  );
};
