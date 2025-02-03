import React from 'react'
import { SkillInfo } from '../../stores/type';

export interface CareerBaseSkillProps {
  careerBaseSkill: SkillInfo | null;
}
const CareerBaseSkill = ({careerBaseSkill}: CareerBaseSkillProps) => {
  return (
    <div>
      CareerBaseSkill
      {careerBaseSkill ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
        <tbody>
          <tr>
            <th>Category</th>
            <td>{careerBaseSkill.category}</td>
          </tr>
          <tr>
            <th>Skills</th>
            <td>
              <table border={1} cellPadding={5} cellSpacing={0}>
                <tbody>
                  {careerBaseSkill.skills.map((skill, index) => (
                    <tr key={index}>
                      <td>{skill}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th>Department</th>
            <td>
              <table border={1} cellPadding={5} cellSpacing={0}>
                <tbody>
                  {careerBaseSkill.department.map((dept, index) => (
                    <tr key={index}>
                      <td>{dept}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      ) : ''}
    </div>
  )
}

export default CareerBaseSkill