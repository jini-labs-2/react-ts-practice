import React from 'react'
import { CareerHistory } from '../../stores/type';
import ViewProject from './ViewProject';

export interface CareerHistProps {
  careerHist: CareerHistory[] | null;
}

const CareerHist = ({careerHist}: CareerHistProps) => {
  return (
    <div>
      CareerHistory
      {careerHist ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
          <thead>
            <tr>
              <th>Period</th>
              <th>Role</th>
              <th>Team Members</th>
              <th>Project Members</th>
              <th>Languages</th>
              <th>Database</th>
              <th>OS/Cloud</th>
              <th>Framework</th>
              <th>Etc</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {careerHist.map((project, index) => (
              <div key={index}>
                <ViewProject careerProject={project}/>
              </div>
            ))}
          </tbody>
        </table>
      ): ''}

    </div>
  )
}

export default CareerHist