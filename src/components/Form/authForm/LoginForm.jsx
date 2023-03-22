import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../../redux/auth/operations';

import styles from './AuthForm.module.scss';

export default function LoginForm() {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
        <label className={styles.label}>
          Email
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            placeholder="your-email@mail.com"
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            required
            placeholder="********"
          />
        </label>
        <button className={styles.button} type="submit">
          Log In
        </button>
      </form>
    </>
  );
}
