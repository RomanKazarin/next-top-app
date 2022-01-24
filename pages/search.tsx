import { GetStaticProps } from 'next'
import React from 'react'
import axios from 'axios'
import { withLayout } from '../layout/Layout'
import { IMenuItem } from '../interfaces/menu.interface'
import { API } from '../helpers/api'

function Search() {

  return (
    <>
      Search
    </>
  )
}

export default withLayout(Search)

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: number
}
