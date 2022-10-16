# 원티드 프리온보딩 프론트엔드 코스

#### 이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 제출용 저장소입니다.

- #### 배포 링크 :
- #### 숏에세이 :

### STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=White">

---

## 목차

- [프로젝트의 실행](#프로젝트의실행)
- [실행 결과](#실행결과)
- [폴더 구조](#폴더구조)
- [구현 사항](#구현사항)

---

</br>

## 프로젝트의실행

```
$ npm install
$ npm start
```

## 실행결과

</br>

</br>

## 폴더구조

```
📦 src
├── 📂 pages
│   ├──📂 Auth
│   │    ├── 📂 SignIn
│   │    │    ├── 📜 SignIn.js
│   │    │    └── 📜 SignIn.scss
│   │    └── 📂 SignUp
│   │         ├── 📜 SignUp.js
│   │         └── 📜 SignUp.scss
│   │
│   └── 📂 Todo
│        ├──📜 Todo.js
│        ├──📜 Todo.scss
│        ├──📜 TodoForm.js
│        ├──📜 TodoForm.scss
│        ├──📜 TodoItem.js
│        ├──📜 TodoItem.scss
│        └──📜 TodoList.js
│
├── 📜 config.js
├── 📜 index.js
└── 📜 Router.js
```

## 구현사항

</br>

# 로그인 / 회원가입

</br>

- ### 토큰이 있을 경우 todo 페이지로 이동

```javascript

```

로컬 스토리지에 토큰이 있는 상태로 `/` 에 접속할 경우 `todo`페이지로 연결됩니다.
</br>

- ### 아이디, 비밀번호 로그인 조건 충족시 로그인 버튼 활성화

```javascript
//SignIn.js
```

</br>
</br>

- ### 로그인시 아이디, 비밀번호 확인 및 토큰 발급

```javascript
//SignIn.js
```

```javascript

```

</br>
</br>

- ### 아이디, 비밀번호 조건 충족시 회원가입 버튼 활성화

```javascript
//SignUp.js

 \

```

전역 변수에 회원가입 창에 아이디,성명,비밀번호 값을 담을 변수를 빈 값으로 선언했습니다.
각 입력창에 `onChange`이벤트가 실행될때 `userInfo`함수가 실행되도록 작성하였습니다. 해당 함수는 각 입력창의 값을 이벤트가 발생할때 해당되는 변수에 담은 후 `signUpCheck`함수를 실행합니다. 이 함수는 아이디와 비밀번호를 충족하는지 검사한 후 `useState`를 이용하여 값의 변화를 변수에 담도록 하였습니다.
</br>

[JSX]

```javascript
  <button disabled={val} type="submit" id="signUp"
  onClick={validSignUp} >
```

val에 변동되는 값에 따라 `useState`값이 `true`일 경우 버튼이 비활성화되고, 입력 조건이 충족하여 `false`일 경우 버튼이 활성화 되도록 하였습니다.
</br>
</br>

- ### 회원가입시 아이디, 비밀번호 확인 및 토큰 발급 후 로그인 페이지로 이동

```javascript
//SignUp.js
```

회원가입 시 입력한 아이디, 비밀번호를 담아 토큰 발급을 요청하고 회원 가입 입력 조건이 미충족 되는 경우 해당 에러 메시지를 `alert`창에 출력하도록 작성했습니다. 만약 토큰이 발급되었을 경우, 이를 로컬스토리지에 저장한 후 로그인창으로 바로 이동하도록 하였습니다.

<br><br>

# 투두 리스트

- ### 투두 컴포넌트, 네가지 기능의 함수가 있습니다.

1. 초기 셋팅
2. 항목 추가
3. 항목 삭제
4. 항목 수정

```javascript
//Todo.js
```
