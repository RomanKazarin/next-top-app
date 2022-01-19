import React from 'react'
import { ISidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import { Menu } from '../Menu/Menu'
import Logo from '../logo.svg'

export const Sidebar = ({ className, ...props }: ISidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  )
}
