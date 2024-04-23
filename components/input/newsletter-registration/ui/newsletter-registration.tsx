import { FormEvent, useRef } from 'react'

import s from '../style/newsletter-registration.module.scss'

export const NewsletterRegistration = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  const registrationHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value

    fetch('/api/newsletter', {
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).then(response => response.json())
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
