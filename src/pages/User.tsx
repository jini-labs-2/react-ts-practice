import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchUserInfo } from '../stores/userSlice';
import { AppDispatch, RootState } from '../stores/store';

const User = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userInfoList = useSelector((state: RootState) => state.user.userInfo)
  return (
    <div>
      <h2>get user list from place holder</h2>
      <button
        onClick={() => {
          dispatch(asyncFetchUserInfo())
        }}
      >get</button>
      {userInfoList ? userInfoList.map((user) => {
        return (
          <div key={user.id}>
            {user.name} | {user.email} | {user.address.city}
          </div>
        )
      }) : '' }
    </div>
  )
}

export default User
