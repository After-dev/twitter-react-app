import styled from 'styled-components'


export const Container = styled('div')`
  background-color: ${props => props.focus ? `transparent` : `var(--border-color)`};;
  border: 1px solid ${props => props.focus ? `var(--main-color)` : `var(--border-color)`};
  border-radius: 9999px;
  display: flex;
  align-items: center;
  margin: 4px 0px;
  width: 100%;

  & > svg {
    fill: ${props => props.focus ? `var(--main-color)` : `var(--alias-color)`};
    margin-left: 12px;
    width: 20px;
    height: 20px;
    min-width: 20px;
  }
`

export const SearchText = styled('input')`
  background-color: transparent;
  border: none;
  font-size: 15px;
  font-weight: 500;
  padding: 12px;
  outline: none;
  overflow-x: scroll;
  width: 100%;
`

export const SearchCancelButton = styled('div')`
  background-color: var(--main-color);
  border-radius: 9999px;
  display: ${props => props.show ? `flex` : `none`};
  margin-right: 12px;
  padding: 2px;

  & svg {
    fill: white;
    width: 20px;
    height: 20px;
  }

  :hover {
    filter: brightness(90%);
  }
`