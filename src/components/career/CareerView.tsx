import React from 'react'
import { CareerInfo } from '../../stores/type'
import CareerBaseInfo from './CareerBaseInfo'
import CareerBaseSkill from './CareerBaseSkill'
import CareerIntroduce from './CareerIntroduce'
import CareerHist from './CareerHist'
import CareerIndivisual from './CareerIndivisual'

export interface CareerViewProps {
  career: CareerInfo | null
} 
const CareerView = ({career}: CareerViewProps) => {

  return (
    <div style={{padding: "3rem"}}>
      {career?.baseInfo?.infoDate ? (
      <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
        <CareerBaseInfo careerBaseInfo={career?.baseInfo} />
        <CareerBaseSkill careerBaseSkill={career?.skills} />
        <CareerIntroduce aboutMe={career?.aboutMe} />
        <CareerHist careerHist={career?.careerHist} />

        <hr style={{marginTop: "2rem", marginBottom: "2rem"}}/>

        <CareerIndivisual myProjects={career?.myProject} />
      </div>
      ) : ''
      }
    </div>
  )
}

export default CareerView