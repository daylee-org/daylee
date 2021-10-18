// import { Typography } from '../Typography/Typography';
import styles from './Todo.module.scss';
import { useRef } from 'react';

// interface TodoProps {
//   label: string;
// }

export function Todo({ handleAddTodo }: any) {
  const todoInput = useRef(null);

  return (
    <label className={styles.Todo}>
      <input
        type="checkbox"
        className={styles.Checkbox}
        ref={todoInput}
      />
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
      todoInput.current.focus();
    }
  }
}
