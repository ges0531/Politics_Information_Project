<<<<<<< HEAD
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import SignUp from "../sign/SignUp";
import SignIn from "../sign/SignIn";
import Blog from './Blog';

import Header from './Header';
import Footer from './Footer';
import MemberList from './Posts/MemberList';
import MemberDetail from './Posts/MemberDetail';

import CardGame from './Posts/react_card/CardGame';

import CandidateMain from './candidate/CandidateMain';
import CandidateDetail from './candidate/CandidateDetail';
import CandidateDetail2 from './candidate/CandidateDetail2';

import CandidateCard from './candidate/CandidateCard';
import CandidateCardDetail from './candidate/CandidateCardDetail';

import Test from './Posts/test_policy/Test';

import PostListPage from './Posts/Board/pages/PostListPage';
import PostPage from './Posts/Board/pages/PostPage';
import WritePage from './Posts/Board/pages/WritePage';


import TeamPage from './TeamPage';

const Router = () => {
    return (
      <div>
      <HashRouter>
      <Header title="싸피는 하나당" />
        <Switch>
          <Route exact path="/" component={Blog} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/MemberList" component={MemberList} />
          <Route exact path="/MemberDetail" component={MemberDetail} />
          <Route exact path="/CardGame" component={CardGame} />

          <Route exact path="/CandidateMain" component={CandidateMain} />
          <Route exact path="/CandidateDetail" component={CandidateDetail} />
          <Route exact path="/CandidateDetail2" component={CandidateDetail2} />
          <Route exact path="/CandidateCard" component={CandidateCard} />
          <Route exact path="/CandidateCardDetail" component={CandidateCardDetail} />
          <Route exact path="/Test" component={Test} />
          
          <Route exact path="/@:username/:postId" component={PostPage} />
          <Route exact path={['/@:username', '/']} component={PostListPage} />
          <Route exact path="/write" component={WritePage} />

          

          <Route exact path="TeamPage" component={TeamPage} />
        </Switch>
      <Footer />
      </HashRouter>
      </div>
    );
  };
=======
// import React from 'react';
// import { HashRouter, Route, Switch } from 'react-router-dom';

// import SignUp from "../sign/SignUp";
// import SignIn from "../sign/SignIn";
// import Blog from './Blog';

// import Header from './Header';
// import Footer from './Footer';
// import MemberList from './Posts/MemberList';
// import MemberDetail from './Posts/MemberDetail';
// import CardGame from './Posts/CardGame';

// import CandidateMain from './candidate/CandidateMain';
// import CandidateDetail from './candidate/CandidateDetail';
// import CandidateDetail2 from './candidate/CandidateDetail2';

// import CandidateCard from './candidate/CandidateCard';
// import CandidateCardDetail from './candidate/CandidateCardDetail';
// import Test from './Posts/Test';

// import TeamPage from './TeamPage';

// const Router = () => {
//     return (
//       <div>
//       <HashRouter>
//       <Header title="싸피는 하나당" />
//         <Switch>
//           <Route exact path="/" component={Blog} />
//           <Route exact path="/SignUp" component={SignUp} />
//           <Route exact path="/SignIn" component={SignIn} />
//           <Route exact path="/MemberList" component={MemberList} />
//           <Route exact path="/MemberDetail" component={MemberDetail} />
//           <Route exact path="/CardGame" component={CardGame} />

//           <Route exact path="/CandidateMain" component={CandidateMain} />
//           <Route exact path="/CandidateDetail" component={CandidateDetail} />
//           <Route exact path="/CandidateDetail2" component={CandidateDetail2} />
//           <Route exact path="/CandidateCard" component={CandidateCard} />
//           <Route exact path="/CandidateCardDetail" component={CandidateCardDetail} />
//           <Route exact path="/Test" component={Test} />

//           <Route exact path="TeamPage" component={TeamPage} />
//         </Switch>
//       <Footer />
//       </HashRouter>
//       </div>
//     );
//   };
>>>>>>> 0fc09007107c2f37ee45181c7e88ccc191e60165
  
//   export default Router;