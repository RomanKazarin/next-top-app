import { IRatingProps } from './Rating.props'
import styles from './Rating.module.css'
import StarIcon from './Star.svg'
import { useEffect, useState, KeyboardEvent } from 'react'
import cn from 'classnames'

export const Rating = ({ rating, setRating, isEditable = false, ...props }: IRatingProps) => {
  const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>))

  useEffect(() => {
    constructRating(rating)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating])

  // функция расчета рейтинга
  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r, i) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}>
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>

      )
    })
    setRatingArray(updatedArray)
  }

  // функция изменения отображения рейтинга при наведении
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructRating(i)
  }

  // функция изменения рейтинга при клике (при выставлении оценки)
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return
    }

    setRating(i)
  }

  // функция изменения рейтинга при нажатии "пробела" (при выставлении оценки)
  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return
    }
    setRating(i)
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => {
        return (
          <span key={i}>{r}</span>
        )
      })}
    </div>
  )
}

