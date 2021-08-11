import styled from 'styled-components'


export const Container = styled('div')`
  border-radius: 9999px;
  cursor: pointer;
  overflow: hidden;

  ${props => {
    const size = props.size || '40px'
    return `
      width: ${size};
      height: ${size};
      min-height: ${size};
      min-width: ${size};
    `
  }}

  ${props => {
    const hoverEffect = props.hoverEffect
    if (hoverEffect) {
      return `
        :hover {
          filter: brightness(90%);
        }
      `
    }
  }}
`

export const Img = styled('img')`
  width: 100%;
  height: 100%;
`