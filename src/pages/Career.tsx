import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchCareerInfo } from '../stores/careerSlice';
import { AppDispatch, RootState } from '../stores/store';

const Career = () => {
  const dispatch = useDispatch<AppDispatch>();
  const careerInfo = useSelector((state: RootState) => state.career.careerInfo)
  console.log(careerInfo);
  return (
    <div>
      <h2>get career list from place holder</h2>
      <button
        onClick={() => {
          dispatch(asyncFetchCareerInfo())
        }}
      >get</button>
      {careerInfo ? JSON.stringify(careerInfo): ''}
    </div>
  )
}

export default Career
