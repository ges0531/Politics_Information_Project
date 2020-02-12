import React from 'react';
import { Route } from 'react-router-dom';

// import PostListPage from './pages/board/PostListPage';
// import PostPage from './pages/board/PostPage';
// import WritePage from './pages/board/WritePage';

import LoginPage from './pages/sign/LoginPage';
import RegisterPage from './pages/sign/RegisterPage';

import MainPage from './pages/main/MainPage';

import HeaderContainer from './containers/common/HeaderContainer';
import Footer from './components/common/Footer';

import MemberList from './pages/member/MemberList';
import MemberDetail from './pages/member/MemberDetail';

import CardGame from './pages/cardgame/CardGame';

import CandidateMain from './pages/candidate/CandidateMain';
import CandidateCard from './pages/candidate/CandidateCard';
import CandidateCardDetail from './pages/candidate/CandidateCardDetail';

import CandidateDetail from './pages/candidate/CandidateDetail';
import CandidateDetail2 from './pages/candidate/CandidateDetail2';

import Test from './pages/policytest/Test';

import TeamPage from './pages/team/TeamPage'

// import Login from './Login';
import KakaoTest from './KakaoTest';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/SignIn" component={LoginPage} />
      <Route exact path="/SignUp" component={RegisterPage} />

      {/* <Route exact path="/write" component={WritePage} /> */}
      {/* <Route component={PostPage} path="/@:uMail/:postId" /> */}
      {/* <Route exact path="/:bodId" component={PostPage}/> */}
      {/* <Route exact path="/PostListPage" component={PostListPage} /> */}

      <Route exact path="/MemberList" component={MemberList} />
      <Route exact path="/MemberDetail" component={MemberDetail} />
      <Route exact path="/CardGame" component={CardGame} />

      <Route exact path="/CandidateMain" component={CandidateMain} />
      <Route exact path="/CandidateDetail" component={CandidateDetail} />
      <Route exact path="/CandidateDetail2" component={CandidateDetail2} />
      <Route exact path="/CandidateCard" component={CandidateCard} />
      <Route exact path="/CandidateCardDetail" component={CandidateCardDetail} />
      <Route exact path="/Test" component={Test} />

      <Route exact path="/TeamPage" component={TeamPage} />
      <Route exact path="/KakaoTest" component={KakaoTest}/>

      {/* <Route exact path="/Login" component={Login} /> */}
      <Footer />
    </>
  );
};
export default App;
