import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
const About = () => {

  const myCategories = ['all', 'business', 'sports', 'world', 'national ']

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchValue = (gonderilenKateqori) => {
    axios.get(`https://inshorts.deta.dev/news?category=${gonderilenKateqori}`)
      .then(res => {
        console.log(res.data.data)
        setData(res.data.data)
        setLoading(true)
      })
    setLoading(false)
  }

  useEffect(() => {
    fetchValue('all')
  }, [])

  return (
    <>
      <section>
        {
          myCategories.map((category, index) => {
            return <button className='btn btn-primary m-2' key={index} onClick={() => fetchValue(category)}>{category}</button>
          })
        }
      </section>

      {
        !loading
          ?
          <section style={{width:'100%', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Circles
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </section>
          : <section>
            {
              data.map((item, index) => {
                return <h1 key={index}>{item.title}</h1>
              })
            }
          </section>
      }
    </>
  )
}

export default About