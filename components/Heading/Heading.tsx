import React from 'react'
import cs from 'classNames'

import styles from './Heading.module.scss'

interface IHeading extends React.HTMLAttributes<HTMLHeadingElement>{
  readonly level: 1 | 2 | 3 | 4 | 5 | 6
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export default function ThemeHeading ({ level, children, className, ...rest }: IHeading) {
  const Tag = `h${level}` as HeadingTag
  return (
    <Tag className={cs(className, styles.heading)} {...rest}>{children}</Tag>
  )
}
