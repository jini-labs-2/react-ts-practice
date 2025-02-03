import React from 'react'
import { AboutMe } from '../../stores/type';

export interface CareerAboutMeProps {
  aboutMe: AboutMe | null;
}

const CareerIntroduce = ({aboutMe}: CareerAboutMeProps) => {
  return (
    <div>
      CareerIntroduce
      {aboutMe ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
          <tbody>
            <tr>
              <th>Introduce</th>
              <td>{aboutMe.document}</td>
            </tr>
          </tbody>
        </table>
      ) : '' }
    </div>
  )
}

export default CareerIntroduce