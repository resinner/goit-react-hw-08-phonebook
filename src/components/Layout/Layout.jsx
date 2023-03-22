import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss'
import Navigation from '../Navigation/Navigation';


export default function Layout() {
  return (
<div className= {styles.container}>
      <header className={styles.header}>
        <Navigation />
      </header>

    <div className= {styles.pageContainer}>
        <Suspense fallback={null}>

          <Outlet />
        </Suspense>
      </div>

      <footer className={styles.footer}>
        <p>
          Created by
          <a href="https://github.com/resinner"> &copy; Pavel</a> as
          homework on courses GoIt
        </p>
      </footer>
    </div>
  );
};