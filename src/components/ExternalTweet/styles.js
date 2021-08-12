import styled from 'styled-components'


export const Container = styled('div')`
  border: 1px solid rgb(207, 217, 222);
  border-radius: 16px;
  width: 100%;
`

export const ContainerPadd = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

export const TweetHeaderContainer = styled('div')`
  display: flex;
  overflow: hidden;
`

export const TweetHeaderUserInfo = styled('div')`
  overflow: hidden;
  display: flex;
  overflow: hidden;
  min-width: 0;

  & > div:nth-child(1) {
    margin-right: 4px;
  }
`

export const TweetHeaderPrimary = styled('span')`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
`

export const TweetHeaderSecondary = styled('span')`
  color: grey;
  font-size: 15px;
  margin-left: 4px;
`

export const TweetTextContainer = styled('div')``

export const TweetText = styled('span')`
  color: black;
  font-size: 15px;
  overflow-wrap: break-word;
`