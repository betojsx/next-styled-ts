import styled from 'styled-components';

const SHeader = styled.header`
  height: 60px;
  background: ${props => props.theme.brown};
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const SNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  a {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.titleFont};
    text-decoration: none;
    margin: 0 10px;
    text-transform: uppercase;
    font-size: 15px;
  }

  a.last {
    margin-left: auto;
    color: ${props => props.theme.yellow};
  }
`;

const SLogo = styled.img`
  width: 115px;
  margin-right: 20px;
`;

export default SHeader;
export { SNav, SLogo };
