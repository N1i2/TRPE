import { connect } from 'react-redux';
import { addTodo } from '../actions';

interface AddTodoProps {
  dispatch: (arg0: { type: string; text: string; }) => void;
}

const AddTodo = ({ dispatch }: AddTodoProps) => {
  let input: HTMLInputElement | null = null;

  return (
    <div>
      <form
        onSubmit={(ee) => {
          ee.preventDefault();
          if (!input!.value.trim()) {
            return;
          }
          dispatch(addTodo(input!.value));
          input!.value = '';
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);