import React, { useEffect, useState } from 'react'
import { User, USER_URL } from '../types/types'

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setLoading(true);

    const fetchUsers = async () => {
      try {
        const response = await fetch(USER_URL);
        const data = await response.json();
        setUsers(data);
      } catch(err) {
        setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error<br/>{error}</div>
  }

  return (
    <div>
      {users ? users.map((user) => (
        <div key={user.id}>
          <div>{user.id}</div>
          <div><a href={`/user/${user.id}`}>{user.name}</a></div>
          <div>{user.username}</div>
          <div>{user.email}</div>
        </div>
      )) : null}

    </div>
  )
}

export default Users
