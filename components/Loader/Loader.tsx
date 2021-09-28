import styles from './Loader.module.scss';

export function Loader() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Loader}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
