import { FormEvent, MutableRefObject, useRef } from 'react'

import { Button } from '@/button'

import s from '../style/events-search.module.scss'
type EventsSearchProps = {
  onSearch: (selectedYear: string, selectedMonth: string) => void
}
export const EventsSearch = ({ onSearch }: EventsSearchProps) => {
  const yearInputRef = useRef<HTMLSelectElement>(null)
  const monthInputRef = useRef<HTMLSelectElement>(null)
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedYear = yearInputRef.current.value
    const selectedMonth = monthInputRef.current.value

    onSearch(selectedYear, selectedMonth)
  }

  return (
    <form action={''} className={s.form} onSubmit={submitHandler}>
      <div className={s.controls}>
        <div className={s.control}>
          <label htmlFor={'year'}>Year</label>
          <select id={'year'} name={''} ref={yearInputRef}>
            <option value={'2021'}>2021</option>
            <option value={'2022'}>2022</option>
          </select>
        </div>
        <div className={s.control}>
          <label htmlFor={'month'}>Month</label>
          <select id={'month'} name={''} ref={monthInputRef}>
            <option value={'1'}>January</option>
            <option value={'2'}>February</option>
            <option value={'3'}>March</option>
            <option value={'4'}>April</option>
            <option value={'5'}>May</option>
            <option value={'6'}>June</option>
            <option value={'7'}>July</option>
            <option value={'8'}>August</option>
            <option value={'9'}>September</option>
            <option value={'10'}>October</option>
            <option value={'11'}>November</option>
            <option value={'12'}>December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  )
}
