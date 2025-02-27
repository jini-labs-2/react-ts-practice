import React, { useState } from 'react'

interface UserFormData {
  username: string;
  useremail: string;
  userage: number | undefined;
}

const UseForm = () => {
  const [userFormData, setUserFormData] = useState<UserFormData>();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const newData = {
      ...userFormData,
      [name]: type === 'number' ? parseInt(value) : value
    } as UserFormData;
    setUserFormData(newData);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const data = await response.json();
      console.log('fetch result:', data)
    } catch (err) {
      console.log('error : ', err);
    }
  }

  return (
    <div>
      <h2> useForm example</h2>
      <br/>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Username:</label>
              <input type='text' name='username' value={userFormData?.username} onChange={handleChange} />
            </div>
            <div>
              <label>User Email:</label>
              <input type='text' name='useremail' value={userFormData?.useremail} onChange={handleChange} />
            </div>
            <div>
              <label>User Age:</label>
              <input type='number' name='userage' value={userFormData?.userage} onChange={handleChange} />
            </div>
          </div>
          <input type='submit' value='確認' />
        </form>
      </div>
    </div>
  )
}

export default UseForm