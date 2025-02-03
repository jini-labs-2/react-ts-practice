import React from 'react'
import { CareerHistory } from '../../stores/type';

export interface CareerProjectProps {
  careerProject: CareerHistory | null;
}

const ViewProject = ({careerProject}: CareerProjectProps) => {
  return (
    <div>
      ViewProject
      {
        careerProject ? (
              <tr>
                <td>
                  {careerProject.period.start} ~ {careerProject.period.end}
                </td>
                <td>{careerProject.role}</td>
                <td>{careerProject.teamMembers}</td>
                <td>{careerProject.projectMembers}</td>
                <td>
                  <ul>
                    {careerProject.lang.map((lang, i) => (
                      <li key={i}>{lang}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {careerProject.database.map((db, i) => (
                      <li key={i}>{db}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {careerProject.osCloud.map((os, i) => (
                      <li key={i}>{os}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {careerProject.frame.map((frame, i) => (
                      <li key={i}>{frame}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {careerProject.etc.map((etc, i) => (
                      <li key={i}>{etc}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <table border={1} cellPadding={3} cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Activation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {careerProject.proces.map((proc, i) => (
                        <tr key={i}>
                          <td>{proc.name}</td>
                          <td>{proc.ativation ? '✅' : '❌'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
        ) : ''
      }
    </div>
  )
}

export default ViewProject