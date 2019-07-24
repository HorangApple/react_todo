import { createAction, handleActions } from "redux-actions";
import { Map, List } from "immutable";

const WRITE_TODO = "todoList/WRITE_TODO";
const INITIALIZE = "todoList/INITIALIZE";
const REMOVE_TODO = "todoList/REMOVE_TODO";
const DONE_TODO = "todoList/DONE_TODO";

// 액션 생성자
export const initialize = createAction(INITIALIZE);
export const writeTodo = createAction(WRITE_TODO);
export const removeTodo = createAction(REMOVE_TODO);
export const doneTodo = createAction(DONE_TODO);

// 초기 상태 정의
const initialState = List([
  Map({
    id: 0,
    done: false,
    content: "반갑습니다.",
    created_at:null
  }),
  Map({
    id: 1,
    done: false,
    content: "오늘 할 일을 작성해주세요.",
    created_at:null
  })
]);

// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
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
      let target = state.findIndex(function(obj){return obj.get('id') === id;})
      return state.updateIn([target,'done'], done=>!done)
    },
    [REMOVE_TODO]: (state, action) => {
      const { id } = action.payload;
      return state.filterNot(x=>x.get('id')===id)
    }
  },
  initialState
);
