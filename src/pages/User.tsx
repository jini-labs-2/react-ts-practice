import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: string
}

interface GeoLocation {
  lat: string,
  lng: string,
}
interface Company {
  name: string,
  catchPhrase: string
  bs: string
}
interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: GeoLocation,
}
interface FetchUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company
}

const User = () => {
  const [users, setUsers] = useState<User[]>([])
  const fetchUsers = async (): Promise<User[]> => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) =>
        res.data.map((item: FetchUser) => {
          return {
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
            address: item.address.street,
          }
        }
    ))
  }

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers()
      setUsers(usersData)
    }

    loadUsers()
  }, [])

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {users && users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default User