import styled from  'styled-components'

export const HeaderStyles = styled.header`
  max-width: 80%;
  margin: 0 auto;
  display: flex;

  .logo-content{

    img{
      max-width: 350px;
    }
  }

  .link-content{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      font-family: 'Roboto', sans-serif;
      transition: 3s;
      text-decoration: none;
      color: #fff;
      background-color: #79aa09;
      padding: 12px;
      border-radius: 5px;
    }
    a:hover{
      background-color: #fff;
      color: #79aa09;
    }
  }
`