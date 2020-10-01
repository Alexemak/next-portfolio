import cs from 'classNames'
import { css } from 'astroturf'

const styles = css`
  .button {
    font-size: 30px;
    background-color: yellow;
    
    &_primary {
      background-color: green;
    }

    &_danger {
      background-color: red;
    }
  }
`

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: 'primary' | 'secondary' | 'danger'
}

export default function ThemeButton ({ variant = 'primary', children, ...rest }: IButton) {
  return (
    <button className={cs(styles.button, styles[`button_${variant}`])} {...rest}>
      {children}
    </button>
  )
}
