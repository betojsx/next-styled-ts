import React, { ReactChildren } from 'react';
import styled from 'styled-components';
export default function Title({
	level,
	children,
	className
}: {
	level: number;
	children: string;
	className: string;
}) {
	return (
		<>
			{level === 2 && <h2 className={className}>{children}</h2>}
			{level === 1 && <h1 className={className}>{children}</h1>}
		</>
	);
}

const StyledTitle = styled(Title)`
	color: ${props => props.theme.yellow};
	text-transform: uppercase;
	font-family: ${props => props.theme.titleFont};
	font-size: ${props => (props.level === 2 ? '40px' : '60px')};
`;

export { StyledTitle };

// const Title = styled`
// 	font-weight: 700;
// 	color: white;
// `;

// export default Title;
