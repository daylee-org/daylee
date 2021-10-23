import {
  Separator,
  Stack,
  Typography,
  Todo,
  Button,
  MessageBox,
} from 'components';
import { useState, useEffect, useRef } from 'react';
import { useRoutingState } from 'hooks';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Friday',
  'Saturday',
  'Sunday',
];
export function WeeklyTodos() {
  const {
    get: { week, month, year },
    set,
  } = useRoutingState();

  return (
    <Stack
      width="23rem"
      height="100%"
      noRadius
      id="todos"
      vertical
      scroll
      spacing="normal"
      py="10px"
    >
      <Stack vertical spacing="20px">
        <Separator
          thin
          color="secondaryTextColor"
          label={`Week ${week}`}
        />
        {days.map((day) => (
          <DailyTodo day={day} key={day} />
        ))}
      </Stack>
    </Stack>
  );
}

interface DailyTodosProps {
  day: string;
}

//IMPROVE possibility: Added refIndex, we could improve the behavior of the todo by adding 
//an element only after the current reference and focus on that one.
function DailyTodo({ day }: DailyTodosProps) {
  const [todos, setTodos] = useState<Array<string>>([""]);
  const todoInputRefs= useRef<HTMLInputElement[]>([]); //main ref object
  todoInputRefs.current = []; //initialze the object that we can access
  const [refIndex, setRefIndex]= useState(1); //IMPROVE
  const [isEnterKeyPressed, setIsEnterKeyPressed] = useState(false);
  const [isTodoAdded, setIsTodoAdded] = useState(false);
  
  const addToTodoInputRefs = (refValue: HTMLInputElement) => {
      if(refValue && !todoInputRefs.current.includes(refValue)){
        todoInputRefs.current.push(refValue);
      }
      setIsTodoAdded(true);
  }

  function handleAddTodo(todo: string) {
    setTodos([...todos, todo]);
  }


  function handleKeyPressed(e: any, refIndex: number) {
    if (e.key === 'Enter') {
      handleAddTodo("");
      setRefIndex(refIndex);
      setIsEnterKeyPressed(true);
    }
  }

  useEffect(() => {
    //We want to make sure this focus on next line is only triggered on KeyDown event
    if(isTodoAdded && isEnterKeyPressed) {
      //focusing on the last todo element of the list. 
      todoInputRefs.current[todoInputRefs.current.length -1]?.focus();
      setIsTodoAdded(false);
      setIsEnterKeyPressed(false);
    }
  }, [todoInputRefs.current])

  return (
    <Stack vertical spacing="tight" key={day}>
      <Typography type="header5">{day}</Typography>
      <Stack vertical>
        {todos.map((element, index) => (
          <Todo
            placeholder="To-do"
            handleAddTodo={handleAddTodo}
            key={`todoKey${index}`}
            innerRef = {addToTodoInputRefs}
            handleKeyPressed = {handleKeyPressed}
            refIndex={index}
          />
        ))}
        <Button
          variant="add"
          fontSize="medium"
          label="New"
          onClick={handleAddTodo}
        />
        <Separator
          thin
          color="disabledTextColor"
          padding="loose"
        />
      </Stack>
      <DailyMessage />
    </Stack>
  );


}

function DailyMessage() {
  const [displayMessage, setDisplayMessage] =
    useState(false);
  console.log(displayMessage);

  return displayMessage ? (
    <MessageBox
      placeholder="I am grateful for..."
      displayMessage={displayMessage}
      setDisplayMessage={setDisplayMessage}
    />
  ) : (
    <Button
      variant="add"
      fontSize="medium"
      label="Add something you are grateful for"
      onClick={() => setDisplayMessage(true)}
    />
  );
}
