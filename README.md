# plan-it

일정관리 SNS 플랫폼

2023/07/06 ~ 2023/07/14

---

## react 심화주차 개인 프로젝트

> 07/07
> feat. nav Link home

> 07/08
> feat. GET,POST 기능

> 07/09
> feat. PATCH,DELETE 기능 구형

> 07/10
> feat. 로그인, 회원가입 구현

> 07/11
> feat. 로그인, 회원가입 구현

> 07/12
>
> feat. 로그인, 회원가입 구현
>
> feat. 토큰 값 받아오기
>
> feat. 공용 버튼 컴포넌트 구현

> 07/13
> Ui 구성

> 07/14
> 제출

> ## issue
>
> 1. 새로고침하면 쿠키는 살아있지만 로그아웃됨
> 2. 수정했을 때 인풋값 바로 안바뀌는 현상

## API 명세

| 이름                  | URL       | Method | request                                                         | prams                   |
| :-------------------- | :-------- | :----- | :-------------------------------------------------------------- | :---------------------- |
| 게시글 목록 전체 조회 | /post     | GET    |                                                                 |                         |
| 게시글 상세 조회      | /post/:id | GET    |                                                                 | {'contentId':contentId} |
| 게시글 작성           | /post     | POST   | {'title’:title,’content’:content}                               |                         |
| 게시글 수정           | /post/:id | PATCH  | {'title’:editTitle,’content’:editContent,’contentId’:contentId} |                         |
| 게시글 삭제           | /post/:id | DELETE | {’contentId’:contentId}                                         |                         |
| 회원가입              | /register | POST   | {’id’:id,'password':password}                                   |                         |
| 로그인                | /login    | POST   | {’id’:id,'password':password}                                   |                         |
