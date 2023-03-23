import styles from './NotificationContainer.module.scss';

import { FallingLines } from 'react-loader-spinner';

export default function NotificationContainer() {
  return (
    <div className={styles.NotificationContainer}>
      {' '}
      <FallingLines
        color="#7CFC00"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
}