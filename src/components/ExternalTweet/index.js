import { useEffect, useState } from 'react'
import {
  Container,
  TweetHeaderContainer,
  TweetHeaderUserInfo,
  TweetHeaderPrimary,
  TweetHeaderSecondary,
  TweetTextContainer,
  TweetText
} from './styles'
import UserImg from 'components/UserImg'

import dateDiff from 'utils'

import userImg from'assets/imgs/user_img.jpg'


export default function ExternalTweet ({tweetRef}) {
  const [externalTweet, setExternalTweet] = useState({})
  const [date, setDate] = useState('')
  const [dateToShow, setDateToShow] = useState('')

  useEffect(() => {
    //Solicitar datos del tweet referenciado (si existe)
    // fetch(...)
    if (tweetRef) {
      setExternalTweet({
        'userIcon': userImg,
        'userName': 'fpuentes',
        'userAlias': 'fpuentes',
        'date': 1628590802428,
        'text': 'ewfgjbwog ewgijnwrg ijnrgijnrgin4grrgijrngi4nrgijn4gij'
      })
      // Calcular diferencias de tiempo del tweet
      const {dateStr, dateDiffStr} = dateDiff(externalTweet.date)
      setDate(dateStr)
      setDateToShow(dateDiffStr)
    }
  }, [])

  return (
    <Container>
      <TweetHeaderContainer>
        <TweetHeaderUserInfo>
          <UserImg src={externalTweet.userIcon} size='18px' />
          <TweetHeaderPrimary>{externalTweet.userName}</TweetHeaderPrimary>
          <TweetHeaderSecondary>@{externalTweet.userAlias}</TweetHeaderSecondary>
        </TweetHeaderUserInfo>
        <TweetHeaderSecondary>·</TweetHeaderSecondary>
        <TweetHeaderSecondary title={date}>{dateToShow}</TweetHeaderSecondary>
      </TweetHeaderContainer>
      <TweetTextContainer>
        <TweetText>{externalTweet.text}</TweetText>
      </TweetTextContainer>
    </Container>
  )
}