import React from 'react'
import { MyProject } from '../../stores/type'

export interface CareerIndivisualProps {
  myProjects: MyProject[] | null
}
const CareerIndivisual = ({myProjects}: CareerIndivisualProps) => {
  return (
    <div>
      <h2>個人プロジェクト</h2>
      {myProjects ? (
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th className="label-myprj-bgcolor" style={{width: "3%"}}>No</th>
          <th className="label-myprj-bgcolor" style={{width: "10%"}}>期間</th>
          <th className="label-myprj-bgcolor" style={{width: "30%"}}>プロジェクト名</th>
          <th className="label-myprj-bgcolor" style={{width: "10%"}}>開発環境</th>
          <th className="label-myprj-bgcolor" style={{width: "10%"}}>目的</th>
          <th className="label-myprj-bgcolor" style={{width: "17%"}}>コメント</th>
          <th className="label-myprj-bgcolor" style={{width: "7%"}}>参照リンク</th>
          <th className="label-myprj-bgcolor" style={{width: "7%"}}>イメージ</th>
        </tr>
      </thead>
      <tbody>
          {myProjects.map((project, index) => (
          <tr key={index}>
            <td>{project.no}</td>
            <td>
              {project.period.start.split("-")[0]}-{project.period.start.split("-")[1]}
            </td>
            <td>{project.projectName}</td>
            <td>{Array.isArray(project.developEnv)
              ? project.developEnv.join(", ")
              : project.developEnv}
            </td>
            <td>{Array.isArray(project.purpose)
              ? project.purpose.join(", ")
              : project.purpose}
            </td>
            <td>{Array.isArray(project.comment)
              ? project.comment.join(", ")
              : project.comment }
            </td>
            <td>
              <a href={project.ref.url} target="_blank" rel="noopener noreferrer">
                {project.ref.url}
              </a>
            </td>
            <td>
              <a href={project.ref.screenShot.url} target="_blank" rel="noopener noreferrer">
                <img src={project.ref.screenShot.url} alt={project.ref.screenShot.screenShotAlt} style={{ width: "100px" }} />
              </a>
            </td>
          </tr>))}
      </tbody>
    </table>
    ) : ''}
    </div>
  )
}

export default CareerIndivisual