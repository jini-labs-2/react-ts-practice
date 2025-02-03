import React from 'react'
import { CareerInfo } from '../../stores/type'
import CareerBaseInfo from './CareerBaseInfo'
import CareerBaseSkill from './CareerBaseSkill'
import CareerIntroduce from './CareerIntroduce'
import CareerHist from './CareerHist'

export interface CareerViewProps {
  career: CareerInfo | null
} 
const CareerView = ({career}: CareerViewProps) => {

  return (
    <div>
      <div>
        {career ? (<div>
            <hr />
            <CareerBaseInfo careerBaseInfo={career?.baseInfo} />
            <hr />
            <CareerBaseSkill careerBaseSkill={career?.skills} />
            <hr />
            <CareerIntroduce aboutMe={career?.aboutMe} />
            <hr />
            <CareerHist careerHist={career?.careerHist} />
          </div>
          ) : ''
        }
      </div>
    </div>
  )
}

export default CareerView