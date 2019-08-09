import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";
import { getTodos } from 'api/firebaseApi'

const WRITE_TODO = "todoList/WRITE_TODO";
const INITIALIZE = "todoList/INITIALIZE";
const REMOVE_TODO = "todoList/REMOVE_TODO";
const DONE_TODO = "todoList/DONE_TODO";
const GET_TODO = "todoList/GET_TODO";
const SET_TODO = "todoList/SET_TODO";

// 액션 생성자
export const initialize = createAction(INITIALIZE);
export const writeTodo = createAction(WRITE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const doneTodo = createAction(DONE_TODO);
export const getTodo = createAction(GET_TODO);
export const setTodo = createAction(SET_TODO);

const user = localStorage.getItem('user');
let initialState = List();
(async (user) => {
  let todos
  if (user === null) {
    todos = [
      Map({
        id: "hi",
        done: false,
        content: "반갑습니다.",
        created_at: null
      }),
      Map({
        id: "niceToMeetYou",
        done: false,
        content: "오늘 할 일을 작성해주세요.",
        created_at: null
      })
    ]
  } else {
    const response = await getTodos(user)
    let list = response.docs.map(todo=>todo.data())
    todos = list.map(todo => Map(todo));
  }
  initialState = List(todos);
})(user)

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) =>initialState,
    [SET_TODO]: (state, action) => {
      const {list} = action.payload
      let todos = list.map(todo => Map(todo));
      state = List(todos);
      return state;
    },
    [WRITE_TODO]: (state, action) => {
      const { content, done, created_at, id } = action.payload;
      return state.push(
        Map({
          id,
          done,
          content,
          created_at
        })
      );
    },
    [DONE_TODO]: (state, action) => {
      const { id } = action.payload;
      let target = state.findIndex(function(obj) {
        return obj.get("id") === id;
      });
      return state.updateIn([target, "done"], done => !done);
    },
    [REMOVE_TODO]: (state, action) => {
      const { id } = action.payload;
      return state.filterNot(x => x.get("id") === id);
    }
  },
  initialState
);
