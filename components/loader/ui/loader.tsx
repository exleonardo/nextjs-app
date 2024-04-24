import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from '../style/loader.module.scss'

type LoaderProps<T extends ElementType = 'div'> = {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, any>

export const Loader = <T extends ElementType = 'div'>({
  ...props
}: LoaderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof LoaderProps>) => {
  const { as, ...rest } = props
  const Component = as || 'div'

  return (
    <Component className={`${s.spinner} ${s.center}`} {...rest}>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
      <div className={s.spinnerBlade}></div>
    </Component>
  )
}
