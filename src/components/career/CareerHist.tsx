import React from 'react'
import { CareerHistory } from '../../stores/type';

export interface CareerHistProps {
  careerHist: CareerHistory[] | null;
}

const CareerHist = ({careerHist}: CareerHistProps) => {
  const projectIds: number[] | null = careerHist ? careerHist.map(item => item.no) : null;
  return (
    <div>
      <h2 id="careerHistTop">プロジェクト履歴</h2>
      <div style={{textAlign: "right"}}>
        {careerHist
         ?  (projectIds
              ? projectIds.map((id, index) => (
                <div key={index} style={{display: "inline", padding: "4px 8px", margin: "4px", color: "blue", backgroundColor: "#ddd", borderRadius: "10px"}}>
                  <a href={`#projectId-${id}`}
                  >{id}</a>
                </div>
              ))
              : '')
         : ''
        }
      </div>
      {careerHist ? ( 
      <table border={1} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th className="label-bgcolor" style={{width: "4%"}}>No</th>
          <th className="label-bgcolor" style={{width: "9%"}}>期間</th>
          <th className="label-bgcolor" style={{width: "42%"}}>業務内容</th>
          <th className="label-bgcolor" style={{width: "9%"}}>役割</th>
          <th className="label-bgcolor" style={{width: "9%"}}>言語</th>
          <th className="label-bgcolor" style={{width: "9%"}}>DB</th>
          <th className="label-bgcolor" style={{width: "9%"}}>サーバOS</th>
          <th className="label-bgcolor" style={{width: "9%"}}>FW・MW・ツール等</th>
        </tr>
      </thead>
      <tbody>
        {careerHist.map((item, index) => (
          <tr key={index}>
            {/* No */}
            <td id={`projectId-${item.no}`}>
              <strong>
                <a href={"#careerHistTop"}>
                  {item.no}
                </a>
              </strong>
            </td>
            {/* Period */}
            <td>
              {item.period.start.split("-")[0]}-{item.period.start.split("-")[1]}
              <br /> ~ <br />
              {item.period.end.split("-")[0]}-{item.period.end.split("-")[1]}
            </td>

            {/* Detail */}
            <td>
              <div style={{marginBottom: ".7rem"}}>
                <strong>[ {item.projectName} ]</strong>
              </div>
              <div style={{marginBottom: ".7rem"}}>
                <strong>担当業務</strong>
                <div style={{marginLeft:".7rem"}}>
                  <ul>{item.detail?.working.map((w, i) => <li key={i}>{w}</li>)}</ul>
                </div>
              </div>
              <div style={{marginBottom: ".7rem"}}>
                <strong>学習スキル</strong>
                <div style={{marginLeft:".7rem"}}>
                  <ul>{item.detail?.earnedSkill.map((s, i) => <li key={i}>{s}</li>)}</ul>
                </div>
              </div>
              <div>
                <strong>コメント</strong>
                <div style={{marginLeft:".7rem"}}>
                  <ul>{item.detail?.comment.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </div>
              </div>
            </td>

            {/* Role */}
            <td>
              <div>役割: {item.role}</div>
              <br />
              <div>チーム: {item.teamMembers}</div>
              <br />
              <div>全体: {item.projectMembers}</div>
            </td>

            {/* Languages */}
            <td>{item.lang.join(", ")}</td>

            {/* Database */}
            <td>{item.database.join(", ")}</td>

            {/* OS/Cloud */}
            <td>{item.osCloud.join(", ")}</td>

            <td>
              {/* Frameworks */}
              {item.frame ? item.frame.map((fr,index) => (
                <li key={index}>{fr}</li>
              )): ''}
              <br />

              {/* Etc */}
              {item.etc ? item.etc.map((fr,index) => (
                <li key={index}>{fr}</li>
              )): ''}
            </td>
          </tr>
        ))}
      </tbody>
      </table>
      ) : ''}
    </div>
  )
}

export default CareerHist