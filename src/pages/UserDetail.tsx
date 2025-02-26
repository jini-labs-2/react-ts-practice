import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { User, USER_URL } from '../types/types';

const UserDetail = () => {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    setError('');
    const fetchUserDetail = async () => {
      try {
        const response = await fetch(`${USER_URL}/${id}`);
        const data = await response.json();
        setUserDetail(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
      } finally {
        setLoading(false);
      }
    }

    fetchUserDetail();
  },[id])
  
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error<br/>{error}</div>
  }


  return (
    <div>
      {JSON.stringify(userDetail) || "nothing"}
    </div>
  )
}

export default UserDetail
