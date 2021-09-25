import './BasicButton.style.css'

export default function BasicButton( {content, callBack} ) {
  const handleClick = () => {
    if (callBack) {
      callBack()
    }
  }

  return (
    <button id='basic-button' onClick={handleClick}>
      {content}
    </button>
  )
}
