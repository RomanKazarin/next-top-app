import { IProductProps } from './Product.props'
import styles from './Product.module.css'
import cn from 'classnames'

export const Product = ({ product, className, ...props }: IProductProps) => {
  return (
    <div className={cn(className, styles.product)}>
      {product.title}
    </div>
  )
}
