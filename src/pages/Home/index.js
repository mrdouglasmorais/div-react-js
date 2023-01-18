import React, { useEffect, useState } from 'react'
import Header from "../../components/Header"
import Footer from '../../components/Footer'

import * as Style from './style'

import api from '../../service'

const Home = () => {
  const [ data, setData ] = useState([]);
  const [ info, setInfo ] = useState();
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    api.get(`character?page=${page}`).then( res => {
       setData(res.data.results)
       setInfo(res.data.info)
    })
  }, [page])

  const handleIncrementPage = () => {
    if(page >= info.pages){
      return
    } else {
      setPage(page + 1)
      window.scrollTo(0, 0)
    }
  }

  const handleDecrementPage = () => {
    if(page <= 0) {
      return
    } else {
      setPage(page - 1)
      window.scrollTo(0, 0)
    }
  }

  return(
    <>
      <Header />
        <Style.Container>
          <h1>Personagens</h1>
          <p>Página atual {page}</p>

          <Style.CardsWrapper>
            {data.map( (el, index) => (
              <Style.Card key={index}>
                <img src={el.image} alt={el.name} />
                <h3>{el.name}</h3>
                <p>{el.gender}</p>
                <p>{el.species}</p>
                <p>{ el.episode.length } { el.episode.length > 1 ? ' episódios' : ' eposódio' }</p>
              </Style.Card>
            ) )}
          </Style.CardsWrapper>
          <p>Total de: {info?.pages} Páginas</p>
          <Style.Paginate>
            <button onClick={() => handleDecrementPage()}>Página anterior</button>
            <p>{page}</p>
            <button onClick={() => handleIncrementPage()}>Próxima Página</button>
          </Style.Paginate>
        </Style.Container>
      <Footer />
    </>
  )
}

export default Home