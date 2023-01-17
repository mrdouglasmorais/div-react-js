import Logo from '../../images/logo.png'

import { Link } from 'react-router-dom';

import { HeaderStyles } from './style'

const Header  = () => {
  return(
    <HeaderStyles>
      <div className='logo-content'>
        <img src={Logo} alt="logo rick and morty"/>
      </div>
      <div className='link-content'>
        <Link to="/">Personagens</Link>
        <Link to="/listagem">Listagem</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </HeaderStyles>
  )
}

export default Header