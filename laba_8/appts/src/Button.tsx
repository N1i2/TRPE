type TitleProps = {
  content: string,
  onClick: () => void,
  disabled?: boolean,
}

const Button = ({content, onClick, disabled = false}: TitleProps) => {
  return (
    <button content="Button" onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

export default Button;
