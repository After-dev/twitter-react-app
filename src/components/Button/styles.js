import styled from 'styled-components'


export const Container = styled('div')`
  ${props => {
    const backgroundColor = props.backgroundColor
    const borderColor = props.borderColor
    const defaultColor = props.defaultColor
    const iconSize = props.iconSize
    const padding = props.padding
    return `
      background-color: ${backgroundColor || 'transparent'};
      border-color: ${borderColor || 'transparent'};
      border-radius: 9999px;
      border-style: solid;
      border-width: ${borderColor ? '1px' : '0'};
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: ${padding || '0'};
      transition-duration: var(--transition-duration);

      & svg {
        fill: ${defaultColor || `black`};
        padding: 0;
        width: ${iconSize || `40px`};
        height: ${iconSize || `40px`};
      }
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

          & > span {
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

export const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Notification = styled('span')`
  ${props => {
    const backgroundColor = props.backgroundColor
    const notificationNum = props.notificationNum
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
      height: ${notificationNum !== '0' ? '16px' : '7px'};
      line-height: 12px;
      min-width: ${notificationNum !== '0' ? '16px' : '7px'};
      position: absolute;
      top: ${notificationNum !== '0' ? '-6px' : '-4px'};
      right: ${notificationNum !== '0' ? '-4px' : '1px'};
    `
  }}
`

export const Text = styled('span')`
  ${props => {
    const defaultColor = props.defaultColor
    const textSize = props.textSize
    const paddingText = props.paddingText
    return `
      color: ${defaultColor || `black`};
      font-size: ${textSize || `15px`};
      padding: ${paddingText || `0`};
    `
  }}
`