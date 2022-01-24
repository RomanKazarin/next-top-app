import { IReviewFormProps } from './ReviewForm.props'
import styles from './ReviewForm.module.css'
import cn from 'classnames'
import { Button, Input, Rating, Textarea } from '..'
import CloseIcon from './close.svg'
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface'
import axios from 'axios'
import { API } from '../../helpers/api'
import { useState } from 'react'

export const ReviewForm = ({ productId, className, ...props }: IReviewFormProps) => {
  const { register, control, handleSubmit, watch, formState: { errors }, reset } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | boolean>()

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId })
      if (data.message) {
        setIsSuccess(true)
        reset()
      } else {
        setIsError('Что-то пошло не так!')
      }
    } catch (e: any) {
      setIsError(e.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>

        <Input
          {...register('name', { required: { value: true, message: 'Имя должно быть заполнено!' } })}
          placeholder='Имя'
          error={errors.name}
        />
        <Input
          {...register('title', { required: { value: true, message: 'Заголовок должен быть заполнен!' } })}
          placeholder='Заголовок отзыва'
          className={styles.title}
          error={errors.title}
        />

        <div className={styles.rating}>
          <span>Оценка: </span>
          <Controller
            name='rating'
            control={control}
            render={({ field }) =>
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />}
            rules={{ required: { value: true, message: 'Укажите вашу оценку!' } }}

          />
        </div>
        <Textarea
          {...register('description', { required: { value: true, message: 'Добавте описание!' } })}
          placeholder='Текст отзыва'
          className={styles.description}
          error={errors.description}
        />

        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>

      {
        isSuccess && <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен!</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      }
      {
        isError && <div className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу!
          <CloseIcon className={styles.close} onClick={() => setIsError(false)} />
        </div>
      }

    </form>
  )
}

