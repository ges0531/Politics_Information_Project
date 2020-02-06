import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';
import MainPage from './blog/Blog';

const App = () => {
  return (
    <>
      <Helmet>
        <title>싸피는하나당</title>
      </Helmet>

      <Route comonent={MainPage} path='/' exact />

      {/* <Route component={PostListPage} path={['/@:username', '/']} exact /> */}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};
export default App;
