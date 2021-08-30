import React from 'react'
import { Link } from 'react-router-dom'
import { Paragraph, Row, Title } from './shared'
import { Card } from './shared/Card'

const Talk = ({ talk }) => {
  return (
    <Link to={`/talk/${talk._id}`}>
      <Card>
        <Title>{talk.title}</Title>
        <Paragraph pv="0" ph="0" textLeft>
          {talk.description}
        </Paragraph>
      </Card>
    </Link>
  )
}

export default Talk
