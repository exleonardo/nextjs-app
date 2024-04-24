import { CommenstDataType } from '@/input'
import { useNewComment } from '@/input/new-comment/hooks/use-new-comment'

import s from '../style/new-comment.module.scss'

type NewCommentProps = {
  onAddComment: (value: CommenstDataType) => void
}
export const NewComment = ({ onAddComment }: NewCommentProps) => {
  const { commentInputRef, emailInputRef, isInvalid, nameInputRef, sendCommentHandler } =
    useNewComment(onAddComment)

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
      {isInvalid && <p className={s.error}>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  )
}
