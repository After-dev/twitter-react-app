import React from 'react'
import {
  Container,
  DivVerticalCenter,
  Icon,
  Notification
} from './styles'

export default function Button ({borderColor, backgroundColor, 
  defaultColor, icon, text, notificationNum, notificationColor,
  textSize, iconSize, padding, paddingText, shadowEffect,
  hoverEffect, hoverBackgroundColor, hoverColor, disabled,
  handleClick, tooltipText}) {
    
  return (
    <Container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      disabled={disabled}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      hoverEffect={hoverEffect}
      onClick={handleClick}
      padding={padding}
      shadowEffect={shadowEffect}
      title={tooltipText}>

      <DivVerticalCenter
        defaultColor={defaultColor}
        iconSize={iconSize}
        textSize={textSize}
        paddingText={paddingText}>
          <Icon>
            {icon && icon}
            {notificationNum &&
              <Notification backgroundColor={notificationColor}>
                {notificationNum !== '0' && notificationNum}
              </Notification>
            }
          </Icon>
          {text && <span>{text}</span>}
      </DivVerticalCenter>
    </Container>
  )
}