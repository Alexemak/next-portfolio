import React from 'react'
import cs from 'classNames'

import styles from './Button.module.scss'

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
