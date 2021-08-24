import styled from 'styled-components'


export const Container = styled('div')`
  cursor: pointer;
  width: 100%;
`

export const ContainerTweet = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
`

export const Status = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 4px;

  & svg {
    fill: grey;
    margin-left: 32px;
    margin-right: 12px;
    height: 16px;
    min-height: 16px;
    width: 16px;
    min-width: 16px;
  }
`

export const StatusText = styled('a')`
  color: grey;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 13px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`

export const TweetContent = styled('div')`
  display: flex;
`

export const TweetDetail = styled('div')`
  margin-left: 12px;
  overflow: hidden;
  width: 100%;
`

export const TweetHeader = styled('div')`
  display: flex;
  justify-content: space-between;
`

export const TweetHeaderInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  min-width: 0;

  & > span:nth-child(3):hover {
    text-decoration: underline;
  }
`

export const TweetHeaderUserInfo = styled('div')`
  overflow: hidden;
  
  :hover {
    & > a {
      text-decoration: underline;
    }
  }
`

export const TweetHeaderPrimary = styled('a')`
  color: black;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
`

export const TweetHeaderSecondary = styled('span')`
  color: grey;
  font-size: 14px;
  margin-left: 4px;
`

export const TweetTextContainer = styled('div')`
  color: black;
  font-size: 15px;
  font-weight: 400;
  overflow-wrap: break-word;
`

export const TweetText = styled('span')``

export const TweetMediaContainer = styled('div')`
  margin-top: 12px;
`

export const TweetRefContainer = styled('div')`
  margin-top: 12px;
`

export const TweetButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 12px;
  min-width: 250px;
  overflow: hidden;
`