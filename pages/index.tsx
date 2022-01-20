import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Htag, Input, Label, Ptag, Rating, Textarea } from '../components'
import { withLayout } from '../layout/Layout'
import { IMenuItem } from '../interfaces/menu.interface'

function Home({ menu }: IHomeProps) {
  const [rating, setrating] = useState<number>(4)

  return (
    <>
      <Htag tag='h1'>Hello</Htag>
      <Htag tag='h2'>Hello</Htag>
      <Htag tag='h3'>Hello</Htag>

      <Button appearance='primary' arrow='down'>Primary</Button>
      <Button appearance='ghost' arrow='right'>Ghost</Button>

      <Ptag size='S'>Small Ptag</Ptag>
      <Ptag>Medium Ptag</Ptag>
      <Ptag size='L'>Large Ptag</Ptag>

      <Label color='ghost'>ghost</Label>
      <Label size='M' color='red'>red</Label>
      <Label href='#' color='grey'>grey</Label>
      <Label color='green'>green</Label>
      <Label color='primary'>primary</Label>

      <Rating rating={rating} isEditable={true} setRating={setrating} />

      <Card>White</Card>
      <Card color='blue'>Blue</Card>

      <Input placeholder='Имя' />

      <div><Textarea placeholder='Текст отзыва' /></div>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
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
