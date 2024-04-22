import s from '../style/newsletter-registration.module.scss'

export const NewsletterRegistration = () => {
  function registrationHandler(event) {
    event.preventDefault()

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={s.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={s.control}>
          <input aria-label={'Your email'} id={'email'} placeholder={'Your email'} type={'email'} />
          <button>Register</button>
        </div>
      </form>
    </section>
  )
}
