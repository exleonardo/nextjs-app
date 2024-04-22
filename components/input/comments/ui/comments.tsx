import { useState } from 'react'

import { CommentList, NewComment } from '@/input'

import s from '../style/comments.module.scss'
type CommentsProps = {
  eventId: string
}
export type CommenstDataType = {
  email: string
  name: string
  text: string
}
export const Comments = ({ eventId }: CommentsProps) => {
  const [showComments, setShowComments] = useState(false)

  function toggleCommentsHandler() {
    setShowComments(prevStatus => !prevStatus)
  }

  function addCommentHandler(commentData: CommenstDataType) {
    // send data to API
  }

  return (
    <section className={s.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  )
}
