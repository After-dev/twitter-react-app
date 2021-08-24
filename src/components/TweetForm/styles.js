import styled from 'styled-components'
import { bps } from 'styles'


export const Container = styled('div')`
  background-color: blue;
  display: flex;
  padding: 4px 16px;
`

export const ImgContainer = styled('div')`
  background-color: yellow;
  margin-right: 12px;
  padding-top: 4px;
`

export const FormContainer = styled('div')`
  background-color: orange;
  padding-top: 4px;
  width: 100%;
`

export const FormText = styled('span')`
  display: inline-block;
  font-size: 20px;
  font-weight: 500;
  padding: 12px 0px;
  outline: none;
  width: 100%;
  word-break: break-all;

  :empty::before {
    color: var(--alias-color);
    content: attr(data-placeholder);
  }
`

export const FormLink = styled('div')`
  border-bottom: 1px solid var(--border-color);
  display: ${props => props.showLink ? 'flex' : 'none'};
  padding-bottom: 12px;
  width: 100%;
`

export const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 12px;

  ${bps.bp4} {
    & > div:nth-child(1) > div:nth-child(3) {
      display: none;
    }

    & > div:nth-child(1) > div:nth-child(5) {
      display: none;
    }
  }
`

export const TextCounter = styled('span')`
  display: ${props => props.showCounter ? `inline-block` : `none`};
  font-weight: 700;
  margin-right: 20px;
`