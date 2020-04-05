import styled from 'styled-components';
const Section = styled.section`
	padding: 40px 20px;
	min-height: 400px;
	background: ${props => props.theme[props.color]};
`;

export default Section;
