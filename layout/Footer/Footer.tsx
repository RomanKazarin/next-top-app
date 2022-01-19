import React from 'react'
import { IFooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: IFooterProps) => {
  return (
    <footer {...props} className={cn(className, styles.footer)}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href='#' target='_blank'>Пользовательское соглашение</a>
      <a href='#' target='_blank'>Политика конфиденциальности</a>
    </footer>
  )
}
