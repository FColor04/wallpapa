import {Logo} from "./logo";
import styled from "styled-components";
import {Navigation} from "./navigation";

const StyledHeader = styled.header`
  border-bottom: 1px solid #aaa;
  padding: 1em 8em;
`;

export const Header = () => (
	<>
		<StyledHeader>
			<Logo href={"./"}/>
		</StyledHeader>
		<Navigation/>
	</>
)
