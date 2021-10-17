// import { Typography } from '../Typography/Typography';
import styles from './Todo.module.scss';

// interface TodoProps {
//   label: string;
// }

export function Todo({ handleAddTodo }: any) {
  return (
    <label className={styles.Todo}>
      <input type="checkbox" className={styles.Checkbox} />
      <input
        type="text"
        onKeyDown={handleKeyPressed}
        className={styles.Text}
      />
      {/* <Typography type="bigText">{label}</Typography>{' '} */}
    </label>
  );

  function handleKeyPressed(e: any) {
    if (e.key === 'Enter' && handleAddTodo != null) {
      handleAddTodo();
    }
  }
}
