import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { subjectAPI } from '../api'
import Comment from './Comment'
import { Container, Paragraph, Row, Title } from './shared'

const TalkDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState(null)

  useEffect(() => {
    const getTalk = async () => {
      try {
        const { data } = await subjectAPI.getOne(id)
        setDetails(data)
        console.log(data)
      } catch (error) {
        console.log('ERROR GET DETAILS', error)
      }
    }
    getTalk()
  }, [id])

  if (!details) return <h1>Loading...</h1>

  return (
    <Container>
      <Title>{details.title}</Title>
      <Paragraph textLeft>{details.description}</Paragraph>
      <span>
        Créé par {details.author.firstname + ' ' + details.author.lastname} le:{' '}
        {new Date(details.date).toLocaleDateString('fr') +
          ' à ' +
          new Date(details.date).toLocaleTimeString('fr')}
      </span>
      <hr />
      <Row>
        <h3>Références :</h3>
      </Row>
      <ul>
        {details.references.map(reference => (
          <li key={reference._id}>
            <a href={reference.url} target="_blank">
              Link
            </a>
            <br />
            <p>{reference.description}</p>
          </li>
        ))}
      </ul>
      <hr />
      <section>
        <h4>Commentaires ({details.comments.length}) :</h4>
        {details.comments.map(id => (
          <Comment key={id} id={id} />
          //   <article key={comment._id}>
          //     <p>
          //       Par{' '}
          //       <Link to={`/?author=${comment.author._id}`}>
          //         {comment.author.pseudo}
          //       </Link>{' '}
          //       le:{' '}
          //       {new Date(comment.createdAt).toLocaleDateString('fr') +
          //         ' à ' +
          //         new Date(comment.createdAt).toLocaleTimeString('fr')}
          //     </p>
          //     <p>{comment.body}</p>
          //   </article>
        ))}
      </section>
    </Container>
  )
}

export default TalkDetails
