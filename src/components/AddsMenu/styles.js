import styled from 'styled-components'


export const Container = styled('div')`
  height: 100%;
  width: 100%;
`

export const ContainerScroll = styled('div')`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
  width: 100%;
`

export const ContainerAdds = styled('div')`
  display: flex;
  flex-direction: column;
`

export const PanelContainer = styled('div')`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 12px 0px;
  overflow: hidden;
  width: 100%;
`

export const PanelTitle = styled('span')`
  border-bottom: 1px solid var(--border-color);
  font-size: 20px;
  font-weight: 800;
  padding: 12px 16px;
  width: 100%;
`

export const PanelItemPad = styled('div')`
  cursor: pointer;
  padding: 12px 16px;

  :hover {
    background-color: var(--border-color);
  }
`

export const PanelLink = styled('a')`
  color: blue;
  cursor: pointer;
  font-size: 15px;
  padding: 12px 16px;

  :hover {
    background-color: var(--border-color);
  }
`

export const PanelAdd = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;

  & span:nth-child(1) {
    color: grey;
    font-size: 13px;
  }

  & span:nth-child(2) {
    font-size: 15px;
    font-weight: 700;
  }
`

export const PanelUserItem = styled('div')`
  display: flex;
  width: 100%;
`

export const PanelUserInfoContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export const PanelCopyright = styled('div')`
  color: gray;
  font-size: 12px;
  margin: 16px;
`

export const CopyrightLink = styled('a')`
  color: gray;
  cursor: pointer;
  display: inline-block;
  padding-right: 12px;
  text-decoration: none;
  white-space: nowrap;

  :hover {
    text-decoration: underline;
  }
`