import { FormEvent, useRef, useState } from 'react'

import { CommenstDataType } from '@/input'

import s from '../style/new-comment.module.scss'
type NewCommentProps = {
  onAddComment: (value: CommenstDataType) => void
}
export const NewComment = ({ onAddComment }: NewCommentProps) => {
  const [isInvalid, setIsInvalid] = useState(false)

  const emailInputRef = useRef<HTMLInputElement>()
  const nameInputRef = useRef<HTMLInputElement>()
  const commentInputRef = useRef<HTMLTextAreaElement>()

  const sendCommentHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredName = nameInputRef.current.value
    const enteredComment = commentInputRef.current.value

    if (
      !enteredEmail ||
      enteredEmail.trim() === '' ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredComment ||
      enteredComment.trim() === ''
    ) {
      setIsInvalid(true)

      return
    }

    onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    })
  }

  return (
    <form className={s.form} onSubmit={sendCommentHandler}>
      <div className={s.row}>
        <div className={s.control}>
          <label htmlFor={'email'}>Your email</label>
          <input id={'email'} ref={emailInputRef} type={'email'} />
        </div>
        <div className={s.control}>
          <label htmlFor={'name'}>Your name</label>
          <input id={'name'} ref={nameInputRef} type={'text'} />
        </div>
      </div>
      <div className={s.control}>
        <label htmlFor={'comment'}>Your comment</label>
        <textarea id={'comment'} ref={commentInputRef} rows={5}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  )
}
