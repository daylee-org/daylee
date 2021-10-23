import styles from './Todo.module.scss';

// interface TodoProps {
//   label: string;
// }

export function Todo({
  placeholder,
  innerRef,
  handleKeyPressed,
  refIndex,
}: any) {
  return (
    <label className={styles.Todo}>
      <input type="checkbox" className={styles.Checkbox} />
      <input
        type="text"
        placeholder={placeholder}
        onKeyDown={(event) =>
          handleKeyPressed(event, refIndex)
        }
        className={styles.Text}
        ref={innerRef}
      />
    </label>
  );
}
