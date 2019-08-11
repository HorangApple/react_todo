# React와 Firebase를 활용한 Todo Application

https://react-todo-ff5d8.firebaseapp.com/

## 1. 개요

React와 Firebase를 활용한 Todo 어플리케이션을 만들어 봅니다. 

React를 구현하여 Redux와 함께 사용하여 상태를 다루는 연습을 하며 styled-components와 같은 외부 라이브러리도 다뤄보는 연습을 합니다.

Firebase의 auth와 database 제품을 통해 계정마다의 Todo를 저장할 수 있도록 구현해봅니다.



## 2. 목표

- React와 Redux의 활용
- Firebase의 auth, database의 활용
- styled-components의 활용
- Git flow 방식 활용



## 3. 기능 명세
### 기본

- page -> TodoList -> Todo 순으로 styled-components를 활용하며 개발
- redux를 활용하여 Todo의 완료 여부 상태를 관리하도록 구현
- Firebase로 구글 ID 로그인 기능 구현.
- 계정마다 작성한 Todo를 Firebase의 database에 저장

## 4. 기술 스택

- React
- React-redux
- Redux-saga
- React-actions
- Styled-components
- Firebase - auth
- FIrebase - database


## 5. 참고

- material-design-shadows
  - https://gist.github.com/serglo/f9f0be9a66fd6755a0bda85f9c64e85f
- Another CSS3 loading animation
  - https://codepen.io/adonisk/pen/vghsm


- 왜 리덕스 사가(Redux-saga) 인가?
  - https://gracefullight.dev/2017/12/06/Why-redux-saga/

- Redux-saga 공식 한글 번역 문서
  - https://mskims.github.io/redux-saga-in-korean/

## 6. 후기

- 기간을 정하지 않고 했더니 생각보다 오래걸렸고 또한 루즈해졌습니다. 다음에는 기간을 정하고 개인 프로젝트를 진행해야겠습니다.

- Redux-saga와 Styled-components는 오로지 공식문서만 보고 구현하였습니다.
- Redux-saga가 사용된 `saga.js`에 최대한 비동기 작업을 구현하였습니다. 확실히 비동기 작업을 할 때 Redux-saga가 편하다는 것을 느꼈습니다. 한 곳에 몰아서 작성했기 때문 에 유지 보수할 때 편했고 비동기 때문에 `.then`을 사용하는 것보다 깔끔하게 코드를 작성할 수 있어서 좋았습니다.
- 사실 가장 힘들었던 것은 디자인 그리고 CSS 작성입니다. Bootstrap을 사용하면 간편하게 만들 수는 있으나 직접 CSS로 만들어서 구현하는 것이 더 공부가 될 것 같아 직접 구현하는 것을 선택하였습니다. 머터리얼 풍의 디자인이 구현하기가 쉬워보여서 참고 자료의 material-design-shadows를 가져와 구현하였습니다. CSS에 대한 공부를 안해서 그런지 의도한대로 구현하는게 힘들었습니다.
- Styled-components는 React에서 사용하기 편한 'CSS in JS' 라이브러리입니다. 별도로 CSS 또는 SCSS 파일을 만들 필요없이 해당 컴포넌트 내에서 구현하는게 편했습니다. 또한 서로 다른 컴포넌트에서 Styled-components의 이름이 같게 작성해도 CSS 요소가 공유되지 않게 해주는데 덕분에 네이밍하는데 고민하는 부담이 적어 좋았습니다.

- Firebase의 auth 기능은 편리한데 아직 OAuth나 인증관련 공부를 하지 않아서 Firebase에서 받은 응답에 accessToken 같은 토큰을 어떻게 다뤄야할지 아직 감이 잡히지 않습니다.

### 앞으로 해야할 것

1. CSS에 대해 공부하기
2. OAuth 등 로그인 관련 공부하기
3. Redux-saga를 활용한 예제 프로젝트 공부하기