import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

import UserMenu from '../../components/UserMenu/UserMenu';
import styles from '../Navigation/Navigation.module.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={styles.navBox}>
        <NavLink className={styles.nav} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={styles.nav} to="/contacts">
            Contacts
          </NavLink>
        ) : (
          <div className={styles.navAuthBox}>
            {!isLoggedIn && (
              <NavLink className={styles.nav} to="/register">
                Register
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink className={styles.nav} to="/login">
                Log In
              </NavLink>
            )}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
}
