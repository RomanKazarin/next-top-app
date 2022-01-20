import React, { useReducer } from 'react'
import { Advantages, HhData, Htag, Label, Product, Sort } from '../../components'
import { SortEnum } from '../../components/Sort/Sort.props'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { sortReducer } from './sort.reducer'
import styles from './TopPage.module.css'
import { ITopPageProps } from './TopPage.props'

export const TopPage = ({ firstCategory, page, products }: ITopPageProps) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating })

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort })
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && <Label color='grey' size='M'>{products.length}</Label>}
        <Sort sort={sort} setSort={setSort} />
      </div>

      <div>
        {sortedProducts && sortedProducts.map(p => {
          return (
            <Product key={p._id} product={p} />
          )
        })}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Label color='red' size='S'>hh.ru</Label>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

      <Advantages {...page} />

    </div>
  )
}