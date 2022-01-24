import { IProductProps } from './Product.props'
import Image from 'next/image'
import { Button, Card, Devider, Label, Rating, Review, ReviewForm } from '..'
import styles from './Product.module.css'
import cn from 'classnames'
import { declensionWordFromNumber, priceRu } from '../../helpers/helpers'
import { useRef, useState } from 'react'

export const Product = ({ product, className, ...props }: IProductProps) => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false)

  const reviewRef = useRef<HTMLDivElement>(null)

  const scrollToReview = () => {
    setIsReviewOpened(true)
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className={className} {...props}>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
            alt={product.title}
            width={70}
            height={70}
          />
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice && <Label className={styles.oldPrice} color='green' size='M'>{priceRu(product.price - product.oldPrice)}</Label>}
        </div>
        <div className={styles.credit}>
          {priceRu(product.credit)}/<small>мес</small>
        </div>
        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>
        <div className={styles.tags}>
          {product.categories.map(category => <Label className={styles.category} color='ghost' key={category}>{category}</Label>)}
        </div>
        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>в кредит</div>
        <div className={styles.rateTitle}>
          <a href="#ref" onClick={scrollToReview}>
            {product.reviewCount}
            {declensionWordFromNumber(product.reviewCount, [' отзыв', ' отзыва', ' отзывов'])}
          </a>
        </div>

        <Devider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(characteristic => {
            return (
              <div key={characteristic.name} className={styles.characteristic}>
                <span className={styles.characteristicName}>{characteristic.name}</span>
                <span className={styles.characteristicDots}></span>
                <span className={styles.characteristicValue}>{characteristic.value}</span>
              </div>
            )
          })}
        </div>

        <div className={styles.advBlock}>
          {product.advantages &&
            <div className={styles.advantages}>
              <div className={styles.advTitle}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>}

          {product.disadvantages &&
            <div className={styles.disadvantages}>
              <div className={styles.advTitle}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>}
        </div>

        <Devider className={cn(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            className={styles.reviewButton}
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>

      </Card>

      <Card color='blue' className={cn(styles.reviews, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened,
      })} ref={reviewRef}>

        {product.reviews.map(review => (
          <div key={review._id}>
            <Review reviews={review} />
            <Devider />
          </div>
        ))}
        <ReviewForm productId={product._id} />

      </Card>
    </div>
  )
}
