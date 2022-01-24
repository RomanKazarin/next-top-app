import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import axios from 'axios'
import { withLayout } from '../../layout/Layout'
import { IMenuItem } from '../../interfaces/menu.interface'
import { TopLevelCategory, TopPageModel } from '../../interfaces/page.interface'
import { ParsedUrlQuery } from 'querystring'
import { ProductModel } from '../../interfaces/product.interface'
import { firstLevelMenu } from '../../helpers/helpers'
import { TopPage } from '../../page-components'
import { API } from '../../helpers/api'


function MainPage({ firstCategory, page, products }: IMainPageProps) {
  return (
    <>
      <TopPage
        firstCategory={firstCategory}
        page={page}
        products={products}
      />
    </>
  )
}

export default withLayout(MainPage)

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = []
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: m.id
    })
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)))
  }

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<IMainPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    }
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type)
  if (!firstCategoryItem) {
    return {
      notFound: true
    }
  }

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id
    })
    if (menu.length == 0) {
      return {
        notFound: true
      }
    }

    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias)

    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
      category: page.category,
      limit: 10
    })

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

interface IMainPageProps extends Record<string, unknown> {
  menu: IMenuItem[]
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}
