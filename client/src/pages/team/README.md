# 🗽  싸피는하나당 🗽 
[![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react)
> 선거의 관심도를 높이기 위한 선거정보 제공사이트

![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/%EC%8B%B8%ED%94%BC%EB%8A%94%ED%95%98%EB%82%98%EB%8B%B9.png)

선거 출마의원들을 소개하는 웹사이트입니다. <br>
한 눈에 정보를 확인할 수 있는 UI와 정치이상형월드컵, 자신의 성향을 파악할 수 있는 게임들이 특징입니다.

<br>

## 🔧 개발 환경 설정

배포를 준비 중 입니다.
```sh
git clone https://lab.ssafy.com/webmobile1-sub2/s02p12a308.git
cd s02p12a308
npm install
```

<br>

## 🔨 개발 스택

**Front**

- React (react-create-app)
- Redux
- 환경 Windows 10 / Visual Studio Code

**Server**

- Spring Boot
- Spring Security
- JPA
- JWT
- 환경 Windows 10 / eclipse

<br>

## 🌏 기능 소개

### 1. 회원가입 유효성 검사
![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/1.gif)
이메일, 비밀번호 regex 적용 <br>
중복확인 및 비밀번호 확인 상태변수 파악 후 회원가입 가능
<br>
### 2. 정치이상형 월드컵 카드게임
![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/3.gif)
@react swipe cards 이용
<br>
### 3. 정치인 정보 열람 (무한스크롤) 
![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/2.gif)
네이버 @egjs/react-infinitegrid 이용
<br>
### 4. 정치성향 검사
![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/4.gif)
<br>
### 5. 후보자 살펴보기
![](https://lab.ssafy.com/webmobile1-sub3/s02p13a308/raw/master/src/img/5.gif) 



<br>


## 📆 프로젝트 작업 스케줄 ( 2020.01.13 ~ )

* 01.31.2020
    * 구현 : (front) 정치성향 테스트 1차 개발
* 01.30.2020
    * 구현 : (back) 국회의원, 의안, 공약 크롤링 완료
    * 구현 : (back) Polition, Promise, bill RestAPI 완료
* 01.29.2020
    * 수정 : (front) 정치공약 이상형 월드컵 - 카드게임 움직임 에러 수정
    * 수정 : (front) 앞단 로그인, 회원가입 유효성 검사 완료
* 01.28.2020
    * 구현 : (front) 무한스크롤링을 사용하여 국회의원 정보 페이지
* 01.23.2020
    * 구현 : (back) user RestAPI 완료
* 01.22.2020
    * 구현 : (back) JWT 토큰 발행 완료
    * 기능 : (front) 정치공약 이상형 월드컵 - 카드게임 1차 완료
    * 구현 : (front) 정치인 상세페이지 구현
* 01.21.2020
    * 구현 : (front) 로그인 / 회원가입 페이지 구현
* 01.20.2020
    * (back) 환경설정 완료
    * 구현 : (front) 메인 페이지 구현

<br>

## 👥 정보

### SSAFY 2기 Seoul Web 3반 <br>
**팀장 : 임희선**<br>
팀원 : 김은수, 박지홍, 이훈

<br>

## 라이센스

 @copyright Samsung Software Academy