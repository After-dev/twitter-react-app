import styled from 'styled-components'


export const Container = styled('button')`
  ${props => {
    const backgroundColor = props.backgroundColor
    const borderColor = props.borderColor
    const padding = props.padding
    return `
      background-color: ${backgroundColor || 'transparent'};
      border-color: ${borderColor || 'transparent'};
      border-radius: 9999px;
      border-style: solid;
      border-width: ${borderColor && '1px' || '0'};
      cursor: pointer;
      padding: ${padding || '5px'};
      transition-duration: var(--transition-duration);
    `
  }}

  ${props => {
    const hoverBackgroundColor = props.hoverBackgroundColor
    const hoverColor = props.hoverColor
    const hoverEffect = props.hoverEffect
    const shadowEffect = props.shadowEffect
    if (hoverEffect) {
      return `
        :hover {
          background-color: ${hoverBackgroundColor};

          & svg {
            fill: ${hoverColor};
          }

          & > div > span:nth-child(2) {
            color: ${hoverColor};
          }
        }
      `
    }

    if (shadowEffect) {
      return `
        :hover {
          filter: brightness(90%);
        }
      `
    }
  }}
`

export const DivVerticalCenter = styled('div')`
  ${props => {
    const defaultColor = props.defaultColor
    const iconSize = props.iconSize
    const paddingText = props.paddingText
    const textSize = props.textSize
    return `
      display: flex;
      align-items: center;

      & svg {
        fill: ${defaultColor || `black`};
        padding: 0px;
        width: ${iconSize || `40px`};
        height: ${iconSize || `40px`};
      }

      & > span:nth-child(2) {
        color: ${defaultColor || `black`};
        font-size: ${textSize || `15px`};
        padding: ${paddingText || `0`};
      }
    `
  }}
`

export const Icon = styled('div')`
  ${props => {
    return `
      position: relative;
    `
  }}
`

export const Notification = styled('span')`
  ${props => {
    const backgroundColor = props.backgroundColor
    return `
      background-color: ${backgroundColor || 'transparent'};
      border: 1px solid white;
      border-radius: 9999px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      height: 16px;
      line-height: 12px;
      min-width: 16px;
      position: absolute;
      top: -6px;
      right: -4px;
    `
  }}
`