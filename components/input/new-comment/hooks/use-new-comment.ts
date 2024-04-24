import { FormEvent, useRef, useState } from 'react'

import { CommenstDataType } from '@/input'

export const useNewComment = (onAddComment: (value: CommenstDataType) => void) => {
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

  return { commentInputRef, emailInputRef, isInvalid, nameInputRef, sendCommentHandler }
}
