import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { commentAPI } from '../api'

const Comment = ({ id }) => {
  const [comment, setComment] = useState(null)

  useEffect(() => {
    const getComment = async () => {
      try {
        const { data } = await commentAPI.getOne(id)
        setComment(data)
      } catch (error) {
        console.log('ERROR GET COMMENT', error)
      }
    }
    getComment()
  }, [id])

  if (!comment) return <p>Loading...</p>

  return (
    <article>
      <p>
        Par{' '}
        <Link to={`/?author=${comment.author._id}`}>
          {comment.author.pseudo}
        </Link>{' '}
        le:{' '}
        {new Date(comment.createdAt).toLocaleDateString('fr') +
          ' à ' +
          new Date(comment.createdAt).toLocaleTimeString('fr')}
      </p>
      <p>{comment.body}</p>
    </article>
  )
}

export default Comment
