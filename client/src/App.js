import React from 'react';
import { Route } from 'react-router-dom';

import PostListPage from './pages/board/PostListPage';
import PostPage from './pages/board/PostPage';
import WritePage from './pages/board/WritePage';

import LoginPage from './pages/sign/LoginPage';
import RegisterPage from './pages/sign/RegisterPage';

import MainPage from './pages/main/MainPage';

import HeaderContainer from './containers/common/HeaderContainer';
import Footer from './components/common/Footer';

import MemberList from './pages/member/MemberList';
import MemberDetail from './pages/member/MemberDetail';

import CardGame from './pages/cardgame/CardGame';

import CandidateCard from './pages/candidate/CandidateCard';

import CandidateDetail from './pages/candidate/CandidateDetail';
import CandidateDetail2 from './pages/candidate/CandidateDetail2';
import CandidateDetail3 from './pages/candidate/CandidateDetail3';
import CandidateDetail4 from './pages/candidate/CandidateDetail4';
import CandidateDetail5 from './pages/candidate/CandidateDetail5';
import CandidateDetail6 from './pages/candidate/CandidateDetail6';
import CandidateDetail7 from './pages/candidate/CandidateDetail7';
import CandidateDetail8 from './pages/candidate/CandidateDetail8';
import CandidateDetail9 from './pages/candidate/CandidateDetail9';
import CandidateDetail10 from './pages/candidate/CandidateDetail10';
import CandidateDetail11 from './pages/candidate/CandidateDetail11';
import CandidateDetail12 from './pages/candidate/CandidateDetail12';
import CandidateDetail13 from './pages/candidate/CandidateDetail13';

import PoliticianPage from './pages/list/PoliticianPage';

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

      <Route exact path="/write" component={WritePage} />
      <Route component={PostPage} path="/@:uMail/:postId" />
      <Route exact path="/:bodId" component={PostPage}/>
      <Route exact path="/PostListPage" component={PostListPage} />

      <Route exact path="/PoliticianPage" component={PoliticianPage} />
      <Route exact path="/MemberDetail" component={MemberDetail} />
      <Route exact path="/CardGame" component={CardGame} />

      <Route exact path="/CandidateDetail" component={CandidateDetail} />
      <Route exact path="/CandidateDetail2" component={CandidateDetail2} />
      <Route exact path="/CandidateDetail3" component={CandidateDetail3} />
      <Route exact path="/CandidateDetail4" component={CandidateDetail4} />
      <Route exact path="/CandidateDetail5" component={CandidateDetail5} />
      <Route exact path="/CandidateDetail6" component={CandidateDetail6} />
      <Route exact path="/CandidateDetail7" component={CandidateDetail7} />
      <Route exact path="/CandidateDetail8" component={CandidateDetail8} />
      <Route exact path="/CandidateDetail9" component={CandidateDetail9} />
      <Route exact path="/CandidateDetail10" component={CandidateDetail10} />
      <Route exact path="/CandidateDetail11" component={CandidateDetail11} />
      <Route exact path="/CandidateDetail12" component={CandidateDetail12} />
      <Route exact path="/CandidateDetail13" component={CandidateDetail13} />
      <Route exact path="/CandidateCard" component={CandidateCard} />
      
      <Route exact path="/Test" component={Test} />

      <Route exact path="/TeamPage" component={TeamPage} />
      <Route exact path="/KakaoTest" component={KakaoTest}/>

      {/* <Route exact path="/Login" component={Login} /> */}
      <Footer />
    </>
  );
};
export default App;
