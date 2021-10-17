// import { Typography } from '../Typography/Typography';
import styles from './Todo.module.scss';

// interface Props {
//   label: string;
// }

export function Todo({ handleAddTodo }: any) {
  return (
    <label className={styles.Todo}>
      <input type="checkbox" className={styles.Checkbox} />
      <input
        type="text"
        onKeyDown={(e) =>
          e.key === 'Enter' && handleAddTodo
        }
        className={styles.Text}
      />
      {/* <Typography type="bigText">{label}</Typography>{' '} */}
    </label>
  );
}
