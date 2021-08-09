import React from 'react'
import {
  Container,
  Icon,
  Notification,
  Text
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
      defaultColor={defaultColor}
      disabled={disabled}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      hoverEffect={hoverEffect}
      iconSize={iconSize}
      onClick={handleClick}
      padding={padding}
      shadowEffect={shadowEffect}
      title={tooltipText}>
        {icon &&
          <Icon>
            {icon}
            {notificationNum &&
              <Notification
                backgroundColor={notificationColor}
                notificationNum={notificationNum}
                >
                  {notificationNum !== '0' && notificationNum}
              </Notification>
            }
          </Icon>
        }

        {text &&
          <Text
            defaultColor={defaultColor}
            paddingText={paddingText}
            textSize={textSize}>
              {text}
          </Text>
        }
    </Container>
  )
}