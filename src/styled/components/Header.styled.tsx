import styled from 'styled-components';

const Header = styled.header`
  height: 60px;
  background: ${props => props.theme.brown};
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.2);
`;

export default Header;
