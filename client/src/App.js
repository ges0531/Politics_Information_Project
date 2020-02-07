import React from 'react';
import { Route } from 'react-router-dom';
// import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

import Blog from './blog/Blog';
import Header from './blog/Header';
import Footer from './blog/Footer';

import MemberList from './blog/Posts/MemberList';
import MemberDetail from './blog/Posts/MemberDetail';
import CardGame from './blog/Posts/CardGame';

import CandidateMain from './blog/candidate/CandidateMain';
import CandidateDetail from './blog/candidate/CandidateDetail';
import CandidateDetail2 from './blog/candidate/CandidateDetail2';

import CandidateCard from './blog/candidate/CandidateCard';
import CandidateCardDetail from './blog/candidate/CandidateCardDetail';
import Test from './blog/Posts/Test';
import TeamPage from './blog/TeamPage'

const App = () => {
  return (
    <>
      <Helmet>
        <title>싸피는하나당</title>
      </Helmet>
      <Header title="싸피는하나당" />
      <Route exact path="/" component={Blog} />
      <Route exact path="/SignIn" component={LoginPage} />
      <Route exact path="/SignUp" component={RegisterPage} />

      {/* <Route component={PostListPage} path={['/@:uMail', '/']} exact /> */}
      {/* <Route component={LoginPage} path="/login" /> */}
      {/* <Route component={RegisterPage} path="/register" /> */}
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:uMail/:postId" />

      <Route exact path="/MemberList" component={MemberList} />
      <Route exact path="/MemberDetail" component={MemberDetail} />
      <Route exact path="/CardGame" component={CardGame} />

      <Route exact path="/CandidateMain" component={CandidateMain} />
      <Route exact path="/CandidateDetail" component={CandidateDetail} />
      <Route exact path="/CandidateDetail2" component={CandidateDetail2} />
      <Route exact path="/CandidateCard" component={CandidateCard} />
      <Route exact path="/CandidateCardDetail" component={CandidateCardDetail} />
      <Route exact path="/Test" component={Test} />

      <Route exact path="TeamPage" component={TeamPage} />
      <Footer />
    </>
  );
};
export default App;
