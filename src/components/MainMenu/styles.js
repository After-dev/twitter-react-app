import styled from 'styled-components'
import { bps } from 'styles'


export const Container = styled('div')`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const ContainerActions = styled('div')`
  & > div {
    margin: 16px 0px;
    & svg {
      display: none;
    }
  }

  ${bps.bp1} {
    & > div svg {
      display: inline;
    }

    & span {
      display: none;
    }
  }
`

export const ContainerProfile = styled('div')`
  display: flex;
  border-radius: 9999px;
  margin: 12px 0px;
  padding: 12px;

  :hover {
    background-color: rgba(15,20,25,0.1);
  }
`

export const ProfileInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
  width: 100%;

  ${bps.bp1} {
    display: none;
  }
`

export const ProfileUserInfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin: 0px 12px;
`

export const UserName = styled('span')`
  color: black;
  font-size: 15px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const UserAlias = styled('div')`
  color: grey;
  font-size: 15px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
`