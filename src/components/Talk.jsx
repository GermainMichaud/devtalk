import React from 'react'
import { Paragraph, Row, Title } from './shared'
import { Card } from './shared/Card'

const Talk = ({ talk }) => {
  return (
    <Card>
      <Title>{talk.title}</Title>
      <Paragraph pv="0" ph="0" textLeft>
        {talk.description}
      </Paragraph>
    </Card>
  )
}

export default Talk
