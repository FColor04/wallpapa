import styled from "styled-components";
import {Dropdown} from "./dropdown";

const StyledNavBar = styled.nav`
  background-color: black;
  color: white;
  height: 3em;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Navigation = () => (
	<StyledNavBar>
		<Dropdown header={"Store"} items={["Wallpapers", "Printing service"]}/>
		<Dropdown header={"About us"} items={["History", "Career", "Contact us"]}/>
	</StyledNavBar>
);
