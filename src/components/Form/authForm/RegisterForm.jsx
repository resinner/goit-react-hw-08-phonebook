import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';

import styles from './AuthForm.module.scss';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={styles.label}>
        Username
        <input
          className={styles.input}
          type="text"
          name="name"
          required
          placeholder="Pablo"
          minLength={3}
        />
      </label>
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
          minLength={8}
          required
          placeholder="********"
        />
      </label>
      <button className={styles.button} type="submit">
        Register
      </button>
    </form>
  );
}
