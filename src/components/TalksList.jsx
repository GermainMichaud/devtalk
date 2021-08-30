import React, { useEffect, useState } from 'react'
import { subjectAPI } from '../api'
import { Title, Container, Row, Input, Grid, Button, Paragraph } from './shared'

const TalksList = () => {
  const [viewCard, setViewCard] = useState(true)
  const [talks, setTalks] = useState([])

  useEffect(() => {
    const getTalks = async () => {
      try {
        const { data } = await subjectAPI.getAll()
        setTalks(data)
      } catch (error) {}
    }
    getTalks()
    return () => {}
  }, [])

  return (
    <Container>
      <Row gap="1rem">
        <Title style={{ margin: 0 }}>Talks</Title>
        <Input type="search" placeholder="Recherche" />
        <Button onClick={() => setViewCard(old => !old)}>
          {viewCard ? 'Line' : 'Card'}
        </Button>
      </Row>
      {talks.length ? (
        <Grid line={!viewCard}></Grid>
      ) : (
        <Row>
          <Paragraph>Aucun sujet trouvé</Paragraph>
        </Row>
      )}
    </Container>
  )
}

export default TalksList