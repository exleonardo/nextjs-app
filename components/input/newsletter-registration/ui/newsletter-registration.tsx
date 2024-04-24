import { FormEvent, useContext, useRef } from 'react'

import { ContextTypeNotification, NotificationContext } from 'store/notification-context'

import s from '../style/newsletter-registration.module.scss'

export const NewsletterRegistration = () => {
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
      .then(data => {
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

  return (
    <section className={s.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={s.control}>
          <input
            aria-label={'Your email'}
            id={'email'}
            placeholder={'Your email'}
            ref={emailInputRef}
            type={'email'}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}
