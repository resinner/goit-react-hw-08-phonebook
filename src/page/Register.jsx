import RegisterForm  from '../components/Form/authForm/RegisterForm';
import { NavLink } from 'react-router-dom';

export default function Register() {
  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm />
      <p>
        Already registered? <NavLink to={'/login'}>Sign in</NavLink>
      </p>
    </div>
  );
};