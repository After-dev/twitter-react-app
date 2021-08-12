import styled from 'styled-components'


export const Container = styled('button')`
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: inline-block;
  padding: 0;
`

export const ContainerCenter = styled('div')`
  display: flex;
  align-items: center;
  transition-duration: var(--transition-duration);

  ${props => {
    const hoverEffect = props.hoverEffect
    const hoverColor = props.hoverColor || 'black'
    const hoverBackgroundColor = props.hoverBackgroundColor || 'black'
    if (hoverEffect) {
      return `
      :hover {
        & > div:nth-child(1) {
          background-color: ${hoverBackgroundColor};
        }

        & svg {
          fill: ${hoverColor};
        }
        & span {
          color: ${hoverColor};
        }
      }
      `
    }
  }}
`

export const CounterText = styled('span')`
  font-size: 13px;
  padding: 0px 12px;

  ${props => {
    const color = props.color || 'black'
    return `
      color: ${color};
    `
  }}
`