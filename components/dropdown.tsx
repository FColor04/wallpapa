import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
  min-width: 16ch;
  height: 100%;
  text-align: center;
  border: 1px solid white;
  border-top: none;
  border-bottom: none;
  counter-reset: itemNumber;

  &:hover {
    background-color: #66bf3c;
  }
`;

const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  z-index: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 16ch;
  background-color: black;
  color: white;

  ${StyledDropdown}:hover & {
    display: flex;
  }
`;

const StyledDropdownItem = styled.span<DropdownItemProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3em;

  ${({isHeader}) => !isHeader && `
    counter-increment: itemCounter;
    
    &:hover {
        background-color: gray;
        
    }
    
    &::before {
        content: counter(itemCounter) ". ";
    }
  `}
`;

export interface DropdownProps {
	header: string,
	items: string[]
}

interface DropdownItemProps {
	isHeader?: boolean
}

export const Dropdown = ({header, items}: DropdownProps) => (
	<StyledDropdown>
		<StyledDropdownItem isHeader>{header}</StyledDropdownItem>
		<StyledDropdownContent>
			{items.map((v, i) => <StyledDropdownItem key={`${header}-item-${i}`}>{v}</StyledDropdownItem>)}
		</StyledDropdownContent>
	</StyledDropdown>
)
