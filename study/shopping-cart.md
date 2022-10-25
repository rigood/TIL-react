# Shopping Cart

📆 2022. 10. 24. 월요일

[📙 Tutorial : How To Create An Advanced Shopping Cart With React and TypeScript](https://youtu.be/lATafp15HWA)

<br>

- React와 TypeScript를 사용하여 만든 간단한 장바구니 앱입니다.

<br>

### 주요 기능

- 장바구니에 상품 추가, 수량 변경, 삭제
- 장바구니에 담긴 상품 목록, 가격, 총 합계 조회

<br>

### TIL

- `Vite`로 React+TypeScript 프로젝트 생성하기

  ```javascript
  npm init vite

  // 프레임워크(React), 언어(TypeScript) 선택

  npm i
  npm run dev
  ```

  그동안 CRA로만 프로젝트를 생성했는데, `Vite` 라는 보일러플레이트를 처음 알게 되었다.  
   빌드나 배포 과정은 잘 모르는지라 어떤 점이 더 나은 건지는 잘 모르겠다...ㅎㅎ

  CRA는 설치 시간이 굉장히 오래 걸리는데, Vite는 체감상 덜 걸리는 느낌?  
   CRA는 프로젝트명을 입력하면 바로 설치가 시작되는데 반해  
   Vite는 먼저 프로젝트를 생성하고, 설치 명령어는 별도로 입력해주어야 한다!

  프로젝트를 실행하는 스크립트 명령어도 다른데  
   CRA는 `npm start`로 시작하고, Vite는 `npm run dev`로 시작하면 된다!

<br>

- 리액트에 `Bootstrap` 적용하기

  ```javascript
  npm i bootstrap react-bootstrap

  (main.tsx)
  import "bootstrap/dist/css/bootstrap.min.css"
  ```

  나름 디자인을 좋아하는지라(?) 부트스트랩 같은 라이브러리는 최대한 쓰지 않으려 하고,  
  부트스트랩으로 가르치는 튜토리얼도 피해 왔는데...

  장바구니 리액트 프로젝트는 튜토리얼 영상이 마땅한 게 없어서  
  결국 Kyle이 가르치는 이 영상으로 공부하게 되었다 ㅠㅠ

  그런데 막상 부트스트랩을 사용해보니 이게 웬걸..? 너무 편하고 좋았다!!

  우선, js파일과 css파일을 오고가지 않아도 되고 하나의 파일에서 작성할 수 있고,  
  간단한 클래스명으로 css코드를 대체할 수 있다는 점이 무척 편리했다.

  가장 좋은 점은 반응형을 쉽게 구현할 수 있다는 것...!  
  나중에 시간될 때 부트스트랩 클래스 코드를 뜯어보면서  
  하드코딩으로 반응형을 쉽게 적용할 수 있는 방법에 대해 연구해봐야겠다 ㅎㅎ

  오늘 처음 사용해 본 클래스로는 `Offcanvas`, `Stack`, `Card` 등이 있다.  
  튜토리얼 코드를 무작정 따라 치느라 아직 정확한 기능에 대해서는 잘 모르지만  
  직접 만드려면 시간 꽤나 걸리는 레이아웃을 이렇게 손쉽게 만들 수 있어서 놀랐다!

<br>

- 폴더 구조

  - 📂 components
    - CardItem.tsx
    - Navbar.tsx
    - ShoppingCart.tsx
    - StoreItem.tsx
  - 📂 context
    - shoppingCartContext.tsx
  - 📂 data
    - item.json
  - 📂 hooks
    - useLocalStorage.tsx
  - 📂 pages
    - About.tsx
    - Home.tsx
    - Store.tsx
  - 📂 utilities
    - App.tsx
    - main.tsx
  - App.tsx
  - ㅡain.tsx
  - index.html

    폴더 구조를 트리 형태로 나타내고 싶었는데, 이것도 참 쉽지 않다.  
    tree 명령어를 입력하면 자동으로 트리 형태로 출력해주는데,  
    node_modules 폴더까지 같이 출력되서 확인하기가 어렵다.

    특정 폴더를 제외하는 명령어도 사용해봤는데,  
    '매개변수가 너무 많습니다' 라는 오류가 떴다.  
    검색해보니 프로젝트명에 '-' 기호가 들어있으면 해당 오류가 발생한다는데  
    프로젝트명 수정하기가 더 귀찮아서 깔끔히 포기하고 직접 타자를 쳤다ㅎㅎ

    그동안 components, pages 정도로만 폴더를 나눴는데  
    다양한 폴더 구조를 익힐 수 있는 좋은 기회였다.

    API로 받아온 데이터나 json 파일은 data 폴더,  
    각종 custom hook은 hooks 폴더,  
    useContext 기능을 구현한 파일은 context 폴더에  
    함수들을 모아 놓은 파일은 utilities 폴더에 넣으면 된다.

<br>

- 파일, 컴포넌트 설명

  - Main.tsx : 부트스트랩 import, BrowserRouter 설정
  - App.tsx : Context Provier 설정, Navbar 배치, Router 설정

  <br>

  - Navbar.tsx : Navbar 디자인, 메뉴 Link 설정, 장바구니 버튼+수량 배지 디자인, 장바구니 클릭 이벤트 등록

  <br>

- sticky position

  - 스크롤 하지 않을 때는 static position처럼 동작(부모 요소 내부에 존재)
  - 스크롤 할 때는 fixed position처럼 동작(부모 요소와 레이어 분리)

  <br>

- 부트스트랩

  - Container

    - 부트스트랩에서 가장 기본적인 레이아웃 요소
    - .container : 반응형 고정 너비 컨테이너(미디어쿼리에 따라 max-width 설정)
    - .container-fluid : 항상 width: 100%
    - .container-{breakpoint} : 분기점에 도달할 때까지 width 100%, 분기점 이후에는 미디어쿼리에 따라 고정된 너비를 가짐

  - Button
    - variant prop을 통해 다양한 스타일을 지정할 수 있음
    - prop 값 앞에 접두사 outline- 을 붙이면 테두리만 있는 버튼

<br>

- Context

  - React.createContext로 ShoppingCartContext 생성
  - useContext를 반환하는 useShoppingCart 훅 생성
  - ShoppingCartProvider 함수 안에 사용할 함수, 상태 생성

    - isOpen state : 장바구니 창 오픈 여부를 나타내는 state, ShoppingCart 컴포넌트에 prop으로 전달
    - openCart, closeCart 함수 : 장바구니 창을 열고 닫는 함수
    - cartItems state : 장바구니 상품 목록 배열, useLoclStorage 훅을 사용하여 로컬스토리지에 저장
    - cartQuantity : 장바구니 수량을 반환(cartItems state에 reduce 메서드를 이용하여 계산)

    - getItemQuantity(id) : find 메서드를 이용하여 cartItems에 id와 일치하는 품목을 찾아내고 그 수량을 반환, 없으면 0 반환
    - increaseCartQuantity(id) : 장바구니 수량 증가 / 현재 장바구니에 해당 상품이 없으면 상품을 추가하고, 상품이 있으면 수량을 1 증가시킨다.
    - decreaseCartQuantity(id) : 장바구니 수량 감소 / 해당 상품 수량이 1이면 상품을 삭제하고, 아니면 수량을 1 감소시킨다.
    - removeFromCart(id) : filter 메서드를 이용하여 해당 상품을 목록에서 삭제한다.
