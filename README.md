# 당신의 눈에 치얼스 🍸

칵테일 레시피 Open API를 받아 멋진 칵테일 레시피 웹을 만들자

[레시피 API](https://www.thecocktaildb.com/api.php)

[레시피 확인하기](https://eunjin0212.github.io/React-CocktailRecipe/)

> - Update 2021. 01. 07
> - Update 2021. 08. 13
> - Update 2022. 11. 08
> - Update 2023. 07. 02

- Api 사용
- Main 랜덤 칵테일 리스트

  > - Search ingrdient, name
  > - 눌렀을 때 Detail 화면 모든 정보

- git commit message 신경쓰기

## Hooks

> - useMemo : 리턴값을 기억 []배열의 요소가 바뀌기 전까지
> - useCallback : 함수 자체를 기억해뒀다가 재실행될 때 다시 실행되는 것을 막아줌 []배열의 요소가 바뀌기 전까지 기억
> - useState를 이용해서 바뀌는 Data 받기
> - useParams : Router에 `:속성`을 match로 가져올 수 있음 (Detail page에서 클릭한 칵테일의 id를 useParams으로 넘겨서 Api를 받아옴)

## Check List (Update 23.07.02)

- [x] 리스트 그리드 디스플레이로 변경
- [x] 디테일 스크린 모달창으로 만들기
- [x] 모달창 클릭한 자리에서 바로 뜨게 하기
- [x] 리스트 정렬
- [x] 텍스트 인풋 백그라운드 투명X
- [x] 디테일 반응형 스크린으로 만들기
- [x] 여러번 랜더링 고치기 (strict 모드 끄기)
- [x] LightHouse 기준 웹 성능 100%
- [x] TypeScript 로 변경 ⚡
- [ ] 모달창 배경 클릭하면 꺼지는 기능 구현하기
- [ ] 무한 스크롤 구현
- [ ] lazy loading 구현
- [ ] NextJS Migration
<!--
## Git Commit Message

### FIX

- Fix A in B : B의 A를 수정
- Fix A which B, Fix A that B : B절인 A를 수정
- Fix A to B, Fix A to be B : B를 위해 A를 수정
- Fix A so that B : A를 수정해서 B가 됨
- Fix A where B : B처럼 발생하는 A를 수정
- Fix A when B : B일 때 발생하는 A를 수정

### ADD

- Add A for B : B를 위해 A를 추가
- Add A to B : B에 A를 추가

### REMOVE

- Remove A : A를 삭제
- Remove A from B : B에서 A를 삭제

### USE

- Use A : A를 사용
- Use A for B : B에 A를 사용
- Use A to B : B가 되도록 A를 사용
- Use A in B : B에서 A를 사용
- Use A instead of B : B 대신 A를 사용

### REFACTOR

- Refactor A : A를 전면 수정

### SIMPLIFY

- Simplify A : A를 단순화

### UPDATE

- Update A to B : A를 B로 업데이트, A를 B하기 위해 업데이트

### IMPROVE

- Improve A : A를 향상

### MAKE

- Make A B : A를 B하게 만듬

### IMPLEMENT

- Implement A : A를 구현
- Implement A to B : B를 위해 A를 구현

### REVISE

- Revise A : A 문서를 개정

### CORRECT

- Correct A : A를 고침

### ENSURE

- Ensure A : A가 확실히 보장 되도록 수정

### PREVENT

- Prevent A : A하지 못하게 막음
- Prevent A from B : A를 B하지 못하게 막음

### AVOID

- Avoid A : A를 회피
- Avoid A if B, Avoid A when B : B인 상황에서 A를 회피

### MOVE

- Move A to B, Move A into B : A를 B로 옮김

### RENAME

- Rename A to B : A를 B로 이름 변경

### ALLOW

- Allow A to B : A가 B를 할 수 있도록 허용

### VERIFY

- Verify A : A를 검증함

### SET

- Set A to B : A를 B로 설정

### PASS

- Pass A to B : A를 B로 넘김
-->
