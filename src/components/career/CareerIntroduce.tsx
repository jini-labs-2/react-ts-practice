import React from 'react'
import { AboutMe } from '../../stores/type';

export interface CareerAboutMeProps {
  aboutMe: AboutMe | null;
}

const CareerIntroduce = ({aboutMe}: CareerAboutMeProps) => {
  return (
    <div>
      <h2>紹介</h2>
      {aboutMe ? (
        <table border={1} cellPadding={5} cellSpacing={0}>
          <tbody>
            <tr>
              <th className="th-depth-1 label-bgcolor">自己紹介</th>
              <td>
                {Array.isArray(aboutMe.document)
                  ? aboutMe.document.map((doc, index) => (<div key={index}>{doc}</div>))
                  : aboutMe.document }
              </td>
            </tr>
          </tbody>
        </table>
      ) : '' }
    </div>
  )
}

export default CareerIntroduce