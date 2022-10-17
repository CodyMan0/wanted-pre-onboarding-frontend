# 원티드 프리온보딩 프론트엔드 코스

#### 이 레파지토리는 원티드 프리온보딩 프론트엔드 과정 선발 과제 제출용 저장소입니다.

- #### 배포 링크 : https://codyman0.github.io/wanted-pre-onboarding-frontend/
- #### 숏에세이 :

### STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/><img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

---

## 목차

- [프로젝트의 실행](#프로젝트의실행)
- [폴더 구조](#폴더구조)
- [구현 사항](#구현사항)

---

</br>

## 프로젝트의실행

```
$ npm install
$ npm start
```

## 폴더구조

```
📦 src
├── 📂 component
│   ├──📜 Container.js
│   ├──📜 TodoCreate.js
│   ├──📜 TodoHeader.js
│   ├──📜 TodoItem.js
│   ├──📜 TodoList.js
│   ├──📜 User.js
│   │
├── 📂 pages
│   ├──📜 SignIn.js
│   ├──📜 Todo.js
│   │
├── 📂 styles
│   ├──📜 GlobalStyle.js
│   ├──📜 theme.js
│   ├──📜 variable.js
│   │
├── 📜 Api.js
├── 📜 config.js
├── 📜 index.js
└── 📜 Router.js
```

## 구현사항

</br>

# 로그인 / 회원가입

</br>

- ### 자동 로그인 기능

```javascript
//User.js
useEffect(() => {
  if (localStorage.getItem('token')) {
    alert('자동 로그인 되었습니다.');
    navigate('/todo');
  }
}, [navigate]);
```

로컬 스토리지에 토큰이 있으며 `todo`페이지로 자동 로그인이 됩니다.
</br>

- ### 버튼 활성화 기능

```javascript
//User.js
const emailValidation = authInputs.email.includes('@');
const passwordValidation = authInputs.password.length >= 8;
const passwordReValidation = authInputs.password === authInputs.passwordConfirm;

const isValidInputs = {
  Login: emailValidation && passwordValidation,
  SignUp: emailValidation && passwordValidation && passwordReValidation,
};

return (
  <Button type="submit" disabled={!isValidInputs[title]}>
    {title}
  </Button>
);
```

변수에 유효성 검사 조건을 선언한 후, 객체를 만들어 title이 Login일 경우와 SignUp일 경우를 분기하여 설정했습니다. SignIn에서 URL이 /일때 User 컴포넌트로 LOGIN_DATA를 보내고 아닐 경우 SIGNUP_DATA를 보냅니다. 보낸 데이터 안에는 title이 있으며 위의 disabled 안에서 유효성 검사에 사용되고 있습니다.
</br>
</br>

- ### 로그인과 회원가입 페이지에서 아이디, 비밀번호 확인 및 토큰 발급

```javascript
//User.js
const onSubmitAuth = e => {
  e.preventDefault();
  const { email, password } = authInputs;
  const authUrl =
    title === 'Login' ? `${baseUrl}/auth/signin` : `${baseUrl}/auth/signup`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  fetch(authUrl, options)
    .then(res => res.json())
    .then(data => {
      if (data.access_token) {
        token = data.access_token;
        localStorage.setItem('token', token);
        navigate('/todo');
      } else {
        const authTitle =
          title === 'Login'
            ? '로그인 정보를 확인해주세요.'
            : '회원 정보를 확인해주세요';
        alert(authTitle);
        navigate('/signup');
      }
    });
};
```

# 투두 리스트

- ### 투두 컴포넌트 구조도

```
├──📜 Todo.js
│   │
│   ├──📜 TodoCreate.js
│   ├──📜 TodoHeader.js
│   ├──📜 TodoList.js
│   │   │
│   │   ├──📜 TodoItem.js
```

```javascript
//Todo.js
```
