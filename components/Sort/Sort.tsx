import React from 'react'
import styles from './Sort.module.css'
import { ISortProps, SortEnum } from './Sort.props'
import cn from 'classnames'
import SortIcon from './sort.svg'

export const Sort = ({ sort, setSort, className, ...props }: ISortProps) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>

      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating
        })}
      >
        <SortIcon className={styles.sortIcon} />По рейтингу
      </span>

      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({
          [styles.active]: sort === SortEnum.Price
        })}
      >
        <SortIcon className={styles.sortIcon} />По цене
      </span>

    </div>
  )
}

