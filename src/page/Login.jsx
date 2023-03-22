import LoginForm  from '../components/Form/authForm/LoginForm';
import { NavLink } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <p className="TextAuth">
        Do you hav't an account? <NavLink to="/register">Sign up</NavLink>
      </p>
    </div>
  );
};