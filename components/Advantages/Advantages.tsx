import React from 'react'
import styles from './Advantages.module.css'
import { IAdvantagesProps } from './Advantages.props'
import { Htag, Label } from '..'
import CheckIcon from './check.svg'

export const Advantages = ({ ...props }: IAdvantagesProps) => {
  return (
    <div className={styles.wrapper}>
      <Htag tag='h2'>Преимущества</Htag>

      {props.advantages.length > 1 && props.advantages.map(advantage => {
        return (
          <div key={advantage._id}>
            <div className={styles.advantages}>

              <div className={styles.circle}>
                <CheckIcon />
              </div>

              <div className={styles.body}>
                <Htag className={styles.bodyTitle} tag='h3'>{advantage.title}</Htag>
              </div>

            </div>
            <p className={styles.bodyDesc}>{advantage.description}</p>
          </div>
        )
      })}

      {props.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: props.seoText }}></div>}

      <div className={styles.tags}>
        <Htag tag='h2'>Получаемые навыки</Htag>
        {props.tags.map(tag => {
          return (
            <span key={tag}>
              <Label color='primary'>{tag}</Label>
            </span>
          )
        })}
      </div>
    </div>
  )
}

