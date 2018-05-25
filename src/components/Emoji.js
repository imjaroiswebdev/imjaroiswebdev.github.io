import styled from 'styled-components';

const Emoji = styled.div`
	display: inline-block;
	min-height: 1px;
	line-height: 16px;
	height: ${props => {return props.size || '16px'}};
	width: ${props => {return props.size || '16px'}};
	padding: 0;
	margin: 0 2px;
	background-image: url(${props => props.icon});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export default Emoji;