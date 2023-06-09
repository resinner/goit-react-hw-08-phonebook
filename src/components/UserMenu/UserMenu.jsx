import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from '../UserMenu/UserMenu.module.scss';
import { AiFillGithub } from 'react-icons/ai';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.userTitle}>
      <AiFillGithub size= "1.5em"/>
      <p className={styles.p}>Welcome, {user.name}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}