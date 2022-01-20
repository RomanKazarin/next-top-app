import { useState, KeyboardEvent } from 'react'
import { ISearchProps } from './Search.props'
import styles from './Search.module.css'
import cn from 'classnames'
import { Button, Input } from '..'
import GlassIcon from './glass.svg'
import { useRouter } from 'next/router'

export const Search = ({ className, ...props }: ISearchProps) => {
  const [search, setSearch] = useState<string>('')
  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch()
    }
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance='primary'
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  )
}

