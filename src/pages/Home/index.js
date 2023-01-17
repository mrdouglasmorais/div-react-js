import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import Footer from '../../components/Footer'

import * as Style from './style'

import api from '../../service'

const Home = () => {
  const [ data, setData ] = useState([]);
  
  useEffect(() => {
    api.get('character').then( res => {
      console.log(res.data)
       setData(res.data.results)
    })
  }, [])


  return(
    <>
      <Header />
      <h1>Personagens</h1>

      {data.map( (el, index) => (
        <Style.Card key={index}>
          <img src={el.image} alt={el.name} />
          <h3>{el.name}</h3>
          <p>{el.gender}</p>
          <p>{el.species}</p>
          <p>{ el.episode.length } { el.episode.length > 1 ? ' episódios' : ' eposódio' }</p>
        </Style.Card>
      ) )}
     
      <Footer />
    </>
  )
}

export default Home