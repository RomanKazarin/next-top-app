import React from 'react'
import styles from './TopPage.module.css'
import { ITopPageProps } from './TopPage.props'

export const TopPage = ({ firstCategory, page, products }: ITopPageProps) => {
  return (
    <>
      {/* {products && products.length} */}
      {products && products.map(prod => {
        return (
          <div key={prod._id}>
            <div>
              {prod.title}
            </div>
            <hr />
          </div>
        )
      })}
    </>
  )
}