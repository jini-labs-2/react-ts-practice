import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface User {
  id: number;
  name: string;
  sername: string; 
  email: string;
}

interface UserFormData {
  username: string;
  useremail: string;
  userage?: number
}

const UseForm = () => {
  const [fetchedUser, setFetchedUser] = useState<User>();
  const {register, handleSubmit, formState: { errors }} = useForm<UserFormData>();
  const onSubmit = async (data: UserFormData) => { 
    try {
      console.log(data); 
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userDetail = await response.json();
      setFetchedUser(userDetail);
    } catch(err) {
      console.error(err); 
    }
    }

  return (
    <div>
      <h2> useForm example</h2>
      <br/>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label>Username:</label>
              <input type="text" {...register('username', { required: true })} />
              {errors.username && <span style={{color:'red'}}>Username is required</span>}
            </div>
            <div>
              <label>User Email:</label>
              <input type='text' {...register('useremail', { required: true })}/>
              {errors.useremail && <span style={{color:'red'}}>user name is required</span>}
            </div>
            <div>
              <label>User Age:</label>
              <input type='number' {...register('userage', { required: false })}/>
            </div>
          </div>
          <input type='submit' value='確認' />
        </form>
      </div>
      <div>
        {fetchedUser ? JSON.stringify(fetchedUser) : ''}
      </div>
    </div>
  )
}

export default UseForm