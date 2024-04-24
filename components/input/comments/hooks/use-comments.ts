import { useContext, useEffect, useState } from 'react'

import { CommenstData, CommenstDataType } from '@/input'
import { NotificationContext } from 'store/notification-context'

export const useComments = (eventId: string) => {
  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState<CommenstData[]>([])

  const { showNotification } = useContext(NotificationContext)

  const [isFetchingComments, setIsFetchingComments] = useState(false)

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true)
      fetch(`/api/comments/${eventId}`)
        .then(response => response.json())
        .then(data => {
          setIsFetchingComments(false)
          setComments(data.comments)
        })
        .finally(() => {
          setIsFetchingComments(false)
        })
    }
  }, [showComments])

  const toggleCommentsHandler = () => {
    setShowComments(prevStatus => !prevStatus)
  }

  const addCommentHandler = (commentData: CommenstDataType) => {
    showNotification({
      message: 'Your comment is currently being stored into a database',
      status: 'pending',
      title: 'Sending comment...',
    })
    fetch(`/api/comments/${eventId}`, {
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        return response.json().then(data => {
          throw new Error(data.message)
        })
      })
      .then(() => {
        showNotification({
          message: 'Your comment was saved!',
          status: 'success',
          title: 'Success!',
        })
      })
      .catch(err => {
        showNotification({
          message: 'Your comment was saved!',
          status: err.message || 'Something went wrong!',
          title: 'Success!',
        })
      })
  }

  return { addCommentHandler, comments, isFetchingComments, showComments, toggleCommentsHandler }
}
