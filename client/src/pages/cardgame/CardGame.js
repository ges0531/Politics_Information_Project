import React, { useState, useEffect } from "react";
import "./Cardgame.css";
import Reactcard from "./react_card";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import PoliticianCard from "./PoliticianCard";
import { Link } from 'react-router-dom';


function Cardgame() {
  var politiciansPageIndex
  var flag_array = new Array();
  var name_array = [];
  var id_array = [];
  for (var i = 0; i < 25; i++) {
    flag_array[i] = 0;
  }
  // const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [flag, flagCount] = useState(25);
  const [boolean_flag, booleanChange] = useState(false);
  const [button_flag, buttonTextChange] = useState(false);

  const [data, dataSet] = useState(false);
  var useData;
  async function fetchMyAPI() {
    let response = await fetch("http://52.79.219.137:80/cardgame/");
    // console.log(response, 1111);
    response = await response.json();
    dataSet(response);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);
  // fetchMyAPI();
  if (data) {
    useData = data;
  } else {
    return (
      <CircularProgress disableShrink />
    );
  }
  // console.log(useData);
  const textChange = () => {
    if (button_flag) {
      buttonTextChange(!button_flag);
      flagCount(useData.promises.length);
    } else {
      for (var i = 0; i < useData.promises.length; i++) {
        flag_array[i] = 0;
      }
      buttonTextChange(!button_flag);
    }
  };

  const forEach = my_array => {
    for (var i = 0; i < useData.promises.length; i++) {
      for (var j = 0; j < my_array.length; j++) {
        if (useData.promises[i].pId === my_array[j]) {
          flag_array[i] = flag_array[i] + 1;
        }
      }
    }
    politiciansPageIndex = flag_array.indexOf(Math.max.apply(null, flag_array))
    return useData.politicians[
      flag_array.indexOf(Math.max.apply(null, flag_array))
    ];
  };

  const swiped = (direction, politicianId) => {
    if (direction === "좋아합니다") {
      var flag_id = 0;
      for (var k = 0; k < useData.promises.length; k++) {
        if (useData.promises[k].pId === politicianId) {
          if (!id_array.includes(useData.promises[k].prId)) {
            flag_id = useData.promises[k].prId;
          }
        }
      }

      if (!id_array.includes(flag_id)) {
        name_array.push(politicianId);
        id_array.push(flag_id);
      }
    }
    // console.log("removing: " + politicianId);
    setLastDirection(direction);
    // console.log(name_array);
  };

  const outOfFrame = promiseId => {
    if (promiseId === useData.promises[0].prId) {
      flagCount(0);
    }
    // console.log(promiseId + " left the screen!");
  };

  const Congressman = forEach(name_array);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      {boolean_flag ? (
        <div>
          <PoliticianCard Congressman={Congressman} />
        </div>
      ) : (
        // <div style={{ textAlign: "center" }}>
        //   <h2>이 사람과 잘 맞습니다</h2>
        //   <img src={Congressman.pImg} style={{ width: "300px" }}></img>
        //   <hr></hr>
        //   <h3>이름: {Congressman.pName}</h3>
        //   <hr></hr>
        //   <h3>정당: {Congressman.pParty}</h3>
        //   <hr></hr>
        //   <h3>선거구: {Congressman.pConstituency}</h3>
        //   <hr></hr>
        //   <h3>당선횟수: {Congressman.pRepeat}</h3>
        //   <hr></hr>
        //   <h3>소속 위원회: {Congressman.pCommittee}</h3>
        //   <hr></hr>
        //   <h3>학력: {Congressman.pEducation}</h3>
        //   <hr></hr>
        //   <h3>주요 경력: {Congressman.pCareer}</h3>
        //   <hr></hr>
        //   <h3>연락처: {Congressman.pContact}</h3>
        //   <hr></hr>
        //   <h3>Email: {Congressman.pMail}</h3>
        // </div>
        <div>
          <h1>공약</h1>
          <div className='likeHate'> 👈 싫어요 : 좋아요 👉 </div>
          <div className="cardContainer">
            {useData.promises.map(promise => (
              <Reactcard
                className="swipe"
                key={promise.prId}
                onSwipe={dir => swiped(dir, promise.pId)}
                onCardLeftScreen={() => outOfFrame(promise.prId)}
              >
                <div
                  // style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <div className="cardTitle">{promise.title}</div>
                </div>
              </Reactcard>
            ))}
          </div>
        </div>
      )}

      {lastDirection && flag ? (
        <h2 className="infoText">{lastDirection}</h2>
      ) : (
        <h2 className="infoText"> </h2>
      )}
      {flag ? (
        <div>
          <h2> </h2>
        </div>
      ) : (
        <div>
          {button_flag ? (
            <div>
              <button
                className="cardButton"
                onClick={() => {
                  booleanChange(!boolean_flag);
                  textChange();
                  fetchMyAPI();
                  setLastDirection();
                }}
              >
                <span>재시작</span>
              </button>
              <Link to={"/view/PoliticianPage"+`/${useData.politicians[politiciansPageIndex].pId}`}>
                <button className="cardButton">더 알아보기</button>
              </Link>
            </div>
          ) : (
            <button
              className="cardButton"
              onClick={() => {
                booleanChange(!boolean_flag);
                textChange();
                fetchMyAPI();
                setLastDirection();
              }}
            >
              <span>결과확인</span>
            </button>
          )}
        </div>
      )}
    </Grid>
  );
}

export default Cardgame;
