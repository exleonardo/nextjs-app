import React, { ComponentPropsWithoutRef, ElementType } from 'react'

import Link, { LinkProps } from 'next/link'

import s from '../style/button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
  fullWidth?: boolean
} & (T extends 'a' ? LinkProps : ComponentPropsWithoutRef<T>)

export const Button = <T extends ElementType = 'button'>({
  className,
  fullWidth,
  ...props
}: ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> &
  Partial<LinkProps>) => {
  const { as: Component = 'button', ...rest } = props

  if (Component === 'a' || Component === Link) {
    return (
      <Link
        className={`${s.btn} ${fullWidth ? s.fullWidth : ''} ${className}`}
        {...rest}
        href={props.href}
      />
    )
  }

  return <button className={`${s.btn} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
}
