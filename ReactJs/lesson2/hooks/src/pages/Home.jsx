import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard'
import { Container, Row } from 'react-bootstrap'

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/podcasts?_limit=10')
      .then(res => {
        console.log(res);
        setData(res.data)
      })
  }, [])

  return (
    <>
      <Container>
        <Row>
          {
            data.map((item, index) => {
              return <SingleCard podcast={item} />
            })
          }
        </Row>
      </Container>

    </>
  )
}

export default Home