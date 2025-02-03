import React from 'react'
import { BaseInfo } from '../../stores/type'

export interface CareerBaseInfoProps {
  careerBaseInfo: BaseInfo | null;
}

const CareerBaseInfo = ({careerBaseInfo}: CareerBaseInfoProps) => {
  return (
    <div>
      CareerBaseInfo
      {careerBaseInfo ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
          <tbody>
            <tr>
              <th>Birth</th>
              <td>{careerBaseInfo.birth}</td>
            </tr>
            <tr>
              <th>Sex</th>
              <td>{careerBaseInfo.sex}</td>
            </tr>
            <tr>
              <th>Graduated</th>
              <td>{careerBaseInfo.graduated}</td>
            </tr>
            <tr>
              <th>Near Station</th>
              <td>{careerBaseInfo.nearStation}</td>
            </tr>
            <tr>
              <th>Certification</th>
              <td>
                <table border={1} cellPadding={5} cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Certificator</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {careerBaseInfo.certification ?
                    careerBaseInfo.certification.map((cert, index) => (
                      <tr key={index}>
                        <td>{cert.name}</td>
                        <td>{cert.certificator}</td>
                        <td>{cert.date}</td>
                      </tr>
                    )): ''}
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

export default CareerBaseInfo