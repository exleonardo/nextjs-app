import { CommentList, NewComment } from '@/input'
import { useComments } from '@/input/comments/hooks/use-comments'
import { Loader } from '@/loader'
import { ObjectId } from 'mongodb'

import s from '../style/comments.module.scss'

type CommentsProps = {
  eventId: string
}
export type CommenstDataType = {
  email: string
  name: string
  text: string
}
export type CommenstData = {
  _id?: ObjectId
  email: string
  eventId: string | string[]
  name: string
  text: string
}
export const Comments = ({ eventId }: CommentsProps) => {
  const { addCommentHandler, comments, isFetchingComments, showComments, toggleCommentsHandler } =
    useComments(eventId)

  return (
    <section className={s.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <Loader />}
    </section>
  )
}
