import {useEffect, useRef, useState} from 'react'
import {
  Container,
  SearchText,
  SearchCancelButton
} from './styles'

import { ReactComponent as Cross } from 'assets/icons/cross.svg'
import { ReactComponent as Search } from 'assets/icons/search.svg'


export default function SearchBar () {
  const textElement = useRef()

  const [text, setText] = useState('')
  const [focus, setFocus] = useState(false)
  const [showSearchCancel, setShowSearchCancel] = useState(false)

  useEffect(() => {
    setShowSearchCancel(text.length !== 0)
  }, [text])

  function handleCancel () {
    console.log('aaaaaa')
    setText('')
    textElement.current.value = ''
    textElement.current.focus()
  }

  function handleFocus () {
    setFocus(true)
  }

  function handleBlur () {
    setFocus(false)
  }

  function handleChange () {
    const currentText = textElement.current.value
    setText(currentText)
  }

  return (
    <Container focus={focus}>
      <Search />
      <SearchText
        ref={textElement}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Buscar en Twitter"
        value={text}
        contentEditable
        />
      <SearchCancelButton
        onClick={handleCancel}
        show={showSearchCancel}>
          <Cross />
      </SearchCancelButton>
    </Container>
  )
}