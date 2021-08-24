import { useRef, useState } from 'react'
import {
  Container,
  ImgContainer,
  FormContainer,
  FormText,
  FormLink,
  ButtonsContainer,
  TextCounter
} from './styles'
import Button from 'components/Button'
import UserImg from 'components/UserImg'

import { ReactComponent as World } from 'assets/icons/world.svg'
import { ReactComponent as Multimedia } from 'assets/icons/multimedia.svg'
import { ReactComponent as Gif } from 'assets/icons/gif.svg'
import { ReactComponent as Bars } from 'assets/icons/bars.svg'
import { ReactComponent as FaceHappy } from 'assets/icons/faceHappy.svg'
import { ReactComponent as Calendar } from 'assets/icons/calendar.svg'


const maxTweetLength = 280
const actionButtons = [
  <Multimedia />,
  <Gif />,
  <Bars />,
  <FaceHappy />,
  <Calendar />
]

export default function TweetForm () {
  const textElement = useRef()
  const [tweetText, setTweetText] = useState('')
  const [showLink, setShowLink] = useState(false)
  const [showCounter, setShowCounter] = useState(false)

  // MaxLength = 280
  function handleTextChange () {
    const text = textElement.current.textContent
    setTweetText(text)

    if (text.length === 0) {
      setShowCounter(false)
    } else if (!showCounter) {
      setShowCounter(true)
    }
  }

  function handleTextFocus () {
    !showLink && setShowLink(true)
  }

  return (
    <Container>
      <ImgContainer>
        <UserImg
          size='48px'
          hoverEffect={true} />
      </ImgContainer>
      <FormContainer>
        <FormText
          ref={textElement}
          data-placeholder='¿Qué está pasando?'
          onKeyUp={handleTextChange}
          onFocus={handleTextFocus}
          contentEditable={true}
          />
        <FormLink showLink={showLink}>
          <Button
            icon={<World />}
            defaultColor='var(--main-color)'
            iconSize='14px'
            text='Cualquier persona puede responder'
            textSize='14px'
            paddingText='0px 10px'
            hoverEffect
            hoverBackgroundColor='rgba(29,161,242,0.1)'
            />
        </FormLink>
        <ButtonsContainer>
          <div>
            {
              actionButtons.map((icon,i) => {
                return <Button
                  key={i}
                  icon={icon}
                  defaultColor='var(--main-color)'
                  iconSize='22px'
                  padding='8px'
                  hoverEffect
                  hoverBackgroundColor='rgba(29,161,242,0.1)'
                  />
              })
            }
          </div>
          <div>
            <TextCounter showCounter={showCounter}>
              {maxTweetLength-tweetText.length}
            </TextCounter>
            <Button
              backgroundColor='var(--main-color)'
              text='Twittear'
              padding='12px'
              defaultColor='var(--button-text-color)'
              shadowEffect
              />
          </div>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  )
}