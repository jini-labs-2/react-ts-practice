import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchCareerInfo } from '../stores/careerSlice';
import { AppDispatch, RootState } from '../stores/store';
import CareerView from '../components/career/CareerView';
import { Helmet } from 'react-helmet-async';

const Career = () => {
  const dispatch = useDispatch<AppDispatch>();
  const careerInfo = useSelector((state: RootState) => state.career.careerInfo)
  const titleName = "React | Redux toolkit 学習 | スキルシート";
  return (
    <>
      <Helmet>
        <title>{titleName}</title>
      </Helmet>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem"}}>
        <h2>About Me (career list)</h2>
        <button
          onClick={() => {
            dispatch(asyncFetchCareerInfo())
          }}
          className='carreer-get-button'
        >経歴読み込み</button>
        {/* {careerInfo ? JSON.stringify(careerInfo): ''} */}
      </div>
      <CareerView career={careerInfo} />
    </>
  )
}

export default Career
