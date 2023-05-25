import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../model/todo";

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        action.payload.id = state.length;
        state.push(action.payload);
      },
      // prepare will be called upon when the addTodo reducer is called,
      // prepare callback is defined in the redux toolkit docs
      prepare: (description: string) => ({
        payload : {
          description : description,
          completed : false
        } as Todo,
      })
    },
    removeTodo(state, action: PayloadAction<number>) {
      console.log("remove",action.payload)
      const index = action.payload;
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean, id: number}>
    ){
      state[action.payload.id].completed = action.payload.completed
    },
  },
});

export const { addTodo, removeTodo, setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
