import { useEffect, useState } from 'react'
import {
  Container,
  ContainerCenter,
  CounterText
} from './styles'
import Button from 'components/Button'


export default function ButtonCounter ({icon, initialCount, defaultColor,
  hoverEffect, hoverColor, hoverBackgroundColor, actived}) {
  const [counter, setCounter] = useState(initialCount)
  const [selected, setSelected] = useState(actived)

  const handleOnClick = () => {
    setSelected(prevSelected => !prevSelected)
  }

  return (
    <Container onClick={handleOnClick}>
      <ContainerCenter
        hoverEffect={hoverEffect}
        hoverColor={hoverColor}
        hoverBackgroundColor={hoverBackgroundColor}>
          <Button
            icon={icon}
            defaultColor={selected ? hoverColor : defaultColor}
            iconSize='19px'
            padding='8px'
            />
          <CounterText color={selected ? hoverColor : defaultColor}>
            {counter}
          </CounterText>
      </ContainerCenter>
    </Container>
  )
}