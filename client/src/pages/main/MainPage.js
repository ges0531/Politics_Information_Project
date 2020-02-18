import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFirst';
import FeaturedPost from './MainMenu';
import { Link } from 'react-router-dom';

const mainFeaturedPost = {
  title: '우리동네',
  title2: '후보자 살펴보기',
  description: "지금 바로 살펴보세요!",
  image: 'https://trulybelong.com/wp-content/uploads/2019/11/SOC-voting-image-TEXTLESS-1280x640.jpg',
};

const featuredPosts = [
  {
    title: '국회의원 찾기',
    description:
      '우리 지역의 국회의원을 찾아보세요!',
    image: 'http://www.urbanbrush.net/web/wp-content/uploads/edd/2018/06/web-20180620025328990421.png',
    imageText: 'Image Text',
    link: '/view/PoliticianPage',
  },
  {
    title: '나와 잘맞는 정치인 찾기',
    description:
      '공약으로 찾아가는 카드게임',
    image: 'https://alinechicago.com/wp-content/uploads/2019/12/shot-cropped-1565091512150.png',
    imageText: 'Image Text',
    link:'/view/CardGame',
  },
  {
    title: '나의 정치성향 테스트',
    description:
      '나의 정치 성향은 무엇일까?',
    image: 'https://images.joins.com/newsroom/myPoliticsTest/sns_thumb.png',
    imageText: 'Image Text',
    link: '/view/Test',
  },
];

export default function Blog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Link to="/view/CandidateCard" style={{ textDecoration: 'none' }}>
          <MainFeaturedPost post={mainFeaturedPost} />
          </Link>
          <Grid>
            {featuredPosts.map(post => (
              <Link to={post.link} style={{ textDecoration: 'none' }} key={post.title}>
              <FeaturedPost key={post.title} post={post}/>
              </Link>
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}