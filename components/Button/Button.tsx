import React from 'react';
import cs from 'classNames'
import styled, { css } from 'astroturf'

const styles = css`
  .button {
    font-size: 30px;
    background-color: red;
    
    &.primary {
      background-color: blue;
    }
  }
`

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  primary: boolean
}

export default function ThemeButton ({ primary, children, ...rest }: IButton) {
  return (
    <button className={cs(styles.button, primary && styles.primary)} {...rest}>
      {children}
    </button>
  )
}
