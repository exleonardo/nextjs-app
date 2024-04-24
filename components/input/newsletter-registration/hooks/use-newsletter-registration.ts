import { FormEvent, useContext, useRef } from 'react'

import { ContextTypeNotification, NotificationContext } from 'store/notification-context'

export const useNewsletterRegistration = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const { showNotification } = useContext<ContextTypeNotification>(NotificationContext)

  const registrationHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value

    showNotification({
      message: 'Registering for newsletter.',
      status: 'pending',
      title: 'Signing up...',
    })
    fetch('/api/newsletter', {
      body: JSON.stringify({ email: enteredEmail }),
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
          message: 'Successfully registered for newsletter!',
          status: 'success',
          title: 'Success!',
        })
      })
      .catch(err => {
        showNotification({
          message: err.message || 'Something went wrong!',
          status: 'error',
          title: 'Error!',
        })
      })
  }

  return { emailInputRef, registrationHandler }
}
