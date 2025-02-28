import React, { useId, useState } from 'react'

function GetIdByUseId() {
  const getedId = useId();
  return (
    <p id={getedId}>{getedId}</p>
  )
}

const UseId = () => {
  const [userid, setUserid] = useState('');

  const handleLogin = () => {
    console.log('userid: ', userid);
  }

  return (
    <div>
      <h2> useId</h2>

      <div className='login-form'>
        <label>
          Id:
          <input type='text' value={userid} onChange={(e) => setUserid(e.target.value)} />
        </label>

        <label>
          Password:
          <input type='password' />
          <GetIdByUseId />
          <GetIdByUseId />
          <GetIdByUseId />
          <GetIdByUseId />
        </label>
      </div>
      <div>
        <input type='button' value={'Login'} onClick={handleLogin}/>
      </div>
    </div>
  )
}

export default UseId
