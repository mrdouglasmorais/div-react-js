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
    display: flex;

    a {
      font-family: 'Roboto', sans-serif;
      text-decoration: none;
      color: '#fff';
      background-color: "#79aa09";
      justify-content: center;
      align-items: center;
    }
  }
`