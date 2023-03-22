import styles from '../page/Home.module.scss';
    import { Triangle } from 'react-loader-spinner';


export default function Home() {
  return (
    <section>
      <div className={styles.spinner}>
        <Triangle
          height="80"
          width="80"
          color="blueviolet"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>

      <h1 className={styles.h1}>
        It's your personal <span className={styles.span}>"Phonebook"</span>{' '}
        aplication!
      </h1>
      <p className={styles.p}>Enjoy using</p>
    </section>
  );
};