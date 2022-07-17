import React from "react";
import styled from "styled-components";

export interface LogoProps {
	href: string
}

const StyledLogo = styled.a`
  font-size: 3.5em;
  text-decoration: none;
  font-family: 'Montserrat';
  background: -webkit-linear-gradient(30deg, #006A6A, #FFB774);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Logo = (props: LogoProps) => (
	<StyledLogo {...props}>
		Wallpapa
	</StyledLogo>
)
