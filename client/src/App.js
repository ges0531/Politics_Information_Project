import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './pages/sign/LoginPage';
import RegisterPage from './pages/sign/RegisterPage';

import MainPage from './pages/main/MainPage';

import HeaderContainer from './containers/common/HeaderContainer';
import Footer from './components/common/Footer';

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
import PoliticianDetailPage from './pages/list/PoliticianDetailPage';

import Test from './pages/policytest/Test';

import TeamPage from './pages/team/TeamPage'

import CommentList from './components/comments/CommentList';

const App = () => {
  return (
    <>
    
      <HeaderContainer />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/view/" component={MainPage} />
      <Route exact path="/view/SignIn" component={LoginPage} />
      <Route exact path="/view/SignUp" component={RegisterPage} />

      <Route exact path="/view/PoliticianPage" component={PoliticianPage} />
      <Route exact path="/view/PoliticianPage/:pId" component={PoliticianDetailPage} />
      <Route exact path="/view/CardGame" component={CardGame} />

      <Route exact path="/view/CandidateDetail" component={CandidateDetail} />
      <Route exact path="/view/CandidateDetail2" component={CandidateDetail2} />
      <Route exact path="/view/CandidateDetail3" component={CandidateDetail3} />
      <Route exact path="/view/CandidateDetail4" component={CandidateDetail4} />
      <Route exact path="/view/CandidateDetail5" component={CandidateDetail5} />
      <Route exact path="/view/CandidateDetail6" component={CandidateDetail6} />
      <Route exact path="/view/CandidateDetail7" component={CandidateDetail7} />
      <Route exact path="/view/CandidateDetail8" component={CandidateDetail8} />
      <Route exact path="/view/CandidateDetail9" component={CandidateDetail9} />
      <Route exact path="/view/CandidateDetail10" component={CandidateDetail10} />
      <Route exact path="/view/CandidateDetail11" component={CandidateDetail11} />
      <Route exact path="/view/CandidateDetail12" component={CandidateDetail12} />
      <Route exact path="/view/CandidateDetail13" component={CandidateDetail13} />
      <Route exact path="/view/CandidateCard" component={CandidateCard} />
      
      <Route exact path="/view/Test" component={Test} />
      <Route exact path="/view/TeamPage" component={TeamPage} />
      <Route exact path="/view/CommentList" component={CommentList}/>
      <Footer />
    </>
  );
};
export default App;
