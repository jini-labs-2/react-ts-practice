import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: boolean
  thumbnailUrl: boolean
}

const Photo = () => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const fetchPhotos = async (): Promise<Photo[]> => {
    return await axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => (res.data as Photo[]))
  }

  useEffect(() => {
    const loadPhotos = async () => {
      const photosData = await fetchPhotos()
      setPhotos(photosData)
    }

    loadPhotos()
  }, [])

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Album ID</th>
          <th>TITLE</th>
          <th>URL</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {photos && photos.map((photo) => (
        <tr key={photo.id}>
          <td>{photo.id}</td>
          <td>{photo.albumId}</td>
          <td>{photo.title}</td>
          <td>{photo.url}</td>
          <td>{photo.thumbnailUrl}</td>
        </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Photo