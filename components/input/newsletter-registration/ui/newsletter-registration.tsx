import { useNewsletterRegistration } from '@/input/newsletter-registration/hooks/use-newsletter-registration'

import s from '../style/newsletter-registration.module.scss'

export const NewsletterRegistration = () => {
  const { emailInputRef, registrationHandler } = useNewsletterRegistration()

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
