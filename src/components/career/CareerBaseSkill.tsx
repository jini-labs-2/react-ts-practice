import React from 'react'
import { SkillInfo } from '../../stores/type';

export interface CareerBaseSkillProps {
  careerBaseSkill: SkillInfo | null;
}
const CareerBaseSkill = ({careerBaseSkill}: CareerBaseSkillProps) => {
  return (
    <div>
      <h2>スキル</h2>
      {careerBaseSkill ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
        <tbody>
          <tr>
            <th className='th-depth-1 label-bgcolor'>得意分野</th>
            <td>{careerBaseSkill.category}</td>
          </tr>
          <tr>
            <th className="label-bgcolor">得意分野</th>
            <td>
              {careerBaseSkill.skills.map((dept, index) => (
                <div key={index} style={{display: "inline"}}>
                  <label style={{margin: "8px", padding:"8px", backgroundColor: "#ddd", borderRadius: "10px"}}
                  >{dept}</label>
                </div>
              ))}
              {/* <table border={1} cellPadding={5} cellSpacing={0}>
                <tbody>
                  {careerBaseSkill.skills.map((skill, index) => (
                    <tr key={index}>
                      <td>{skill}</td>
                    </tr>
                  ))}
                </tbody>
              </table> */}
            </td>
          </tr>
          <tr>
            <th className="label-bgcolor">得意業務</th>
            <td>
              {careerBaseSkill.department.map((dept, index) => (
                <div key={index}>
                  <li>{dept}</li>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      ) : ''}
    </div>
  )
}

export default CareerBaseSkill