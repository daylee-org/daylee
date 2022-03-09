import { useState, useEffect, useRef } from 'react';
import { Stack, Todo, Button } from 'components';

export function WeeklyGoals() {
  const [todos, setTodos] = useState<Array<string>>(['']);
  const todoInputRefs = useRef<HTMLInputElement[]>([]); //main ref object
  todoInputRefs.current = []; //initialze the object that we can access
  const [_, setRefIndex] = useState(1); //IMPROVE
  const [isEnterKeyPressed, setIsEnterKeyPressed] =
    useState<boolean>(false);
  const [isTodoAdded, setIsTodoAdded] =
    useState<boolean>(false);

  useEffect(() => {
    //We want to make sure this focus on next line is only triggered on KeyDown event
    if (isTodoAdded && isEnterKeyPressed) {
      //focusing on the last todo element of the list.
      todoInputRefs.current[
        todoInputRefs.current.length - 1
      ]?.focus();
      setIsTodoAdded(false);
      setIsEnterKeyPressed(false);
    }
  }, [isEnterKeyPressed, isTodoAdded]);
  return (
    <Stack
      px="tight"
      vertical
      scroll
      background="widgetBackgroundColor"
    >
      {todos.map((_, index) => (
        <Todo
          placeholder="Goal"
          handleAddTodo={handleAddTodo}
          key={`todoKey${index}`}
          innerRef={addToTodoInputRefs}
          handleKeyPressed={handleKeyPressed}
          refIndex={index}
        />
      ))}
    </Stack>
  );

  function addToTodoInputRefs(refValue: HTMLInputElement) {
    if (
      refValue &&
      !todoInputRefs.current.includes(refValue)
    ) {
      todoInputRefs.current.push(refValue);
    }
    setIsTodoAdded(true);
  }

  function handleAddTodo() {
    setTodos([...todos, '']);
  }

  function handleKeyPressed(e: any, refIndex: number) {
    if (e.key === 'Enter') {
      handleAddTodo();
      setRefIndex(refIndex);
      setIsEnterKeyPressed(true);
    }
  }
}
