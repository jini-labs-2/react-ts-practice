import React from 'react'
import { BaseInfo } from '../../stores/type'
import "../../styles/careerInfo.css"

export interface CareerBaseInfoProps {
  careerBaseInfo: BaseInfo | null;
}

const CareerBaseInfo = ({careerBaseInfo}: CareerBaseInfoProps) => {
  return (
    <div>
      <h2>基本情報</h2>
      {careerBaseInfo ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
          <tbody>
            <tr>
              <th className="th-depth-1 label-bgcolor">年齢</th>
              <td>{careerBaseInfo.birth}</td>
            </tr>
            <tr>
              <th className="label-bgcolor">性別</th>
              <td>{careerBaseInfo.sex}</td>
            </tr>
            <tr>
              <th className="label-bgcolor">学歴</th>
              <td>{careerBaseInfo.graduated}</td>
            </tr>
            <tr>
              <th className="label-bgcolor">最寄駅</th>
              <td>{careerBaseInfo.nearStation}</td>
            </tr>
            <tr>
              <th className="label-bgcolor">資格</th>
              <td>
                <table border={1} cellPadding={5} cellSpacing={0}>
                  <thead>
                    <tr>
                      <th className="sublabel-bgcolor">名称</th>
                      <th className="sublabel-bgcolor">発行機関</th>
                      <th className="sublabel-bgcolor">日付</th>
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