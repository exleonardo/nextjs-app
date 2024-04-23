import { useEffect, useState } from 'react'

import { CommentList, NewComment } from '@/input'
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
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<CommenstData[]>([])

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then(response => response.json())
        .then(data => {
          setComments(data.comments)
        })
    }
  }, [showComments, comments])

  const toggleCommentsHandler = () => {
    setShowComments(prevStatus => !prevStatus)
  }

  const addCommentHandler = (commentData: CommenstDataType) => {
    fetch(`/api/comments/${eventId}`, {
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    <section className={s.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  )
}
