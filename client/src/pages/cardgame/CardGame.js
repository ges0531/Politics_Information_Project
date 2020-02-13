import React, { useState, useEffect } from "react";
import "./Cardgame.css";
import Reactcard from "./react_card";
import Grid from "@material-ui/core/Grid";
import CircularDeterminate from "./CircularDeterminate";

const db = [
  {
    id: 1,
    commit: "외식산업 진흥법 일부개정법률안",
    name: "강석진",
    url:
      "http://watch.peoplepower21.org/files/attach/images/461/886/79d4e9058cb84f214310aa59364f1f85.jpg"
  },
  {
    id: 2,
    commit: "상속세 및 증여세법 일부개정법률안",
    name: "강병원",
    url:
      "http://watch.peoplepower21.org/files/attach/images/461/816/f164c361398baab0fb4e05dbfb30b137.jpg"
  },
  {
    id: 3,
    commit: "공공보건의료에 관한 법 률 일부개정법률안",
    name: "강길부",
    url: "http://watch.peoplepower21.org/images/member/318.jpg"
  },
  {
    id: 4,
    commit: "건설기계관리법 일부개정법률안",
    name: "권은희",
    url: "http://watch.peoplepower21.org/images/member/864.jpg"
  },
  {
    id: 5,
    commit: "고등교육법 일부개정법률안",
    name: "나경원",
    url: "http://watch.peoplepower21.org/images/member/363.jpg"
  },
  {
    id: 6,
    commit: "제품안전기본법 일부개정법률안",
    name: "권칠승",
    url:
      "http://watch.peoplepower21.org/files/attach/images/461/853/b8d89e4258aa9fb95f8d5a599cd5ab01.jpg"
  },
  {
    id: 7,
    commit: "전기용품 및 생활용품 안전관리법 일부개정법률안",
    name: "권칠승",
    url:
      "http://watch.peoplepower21.org/files/attach/images/461/853/b8d89e4258aa9fb95f8d5a599cd5ab01.jpg"
  }
];

function Cardgame() {
  var flag_array = new Array();
  var name_array = [];
  var id_array = [];
  for (var i = 0; i < db.length; i++) {
    flag_array[i] = 0;
  }
  // const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [flag, flagCount] = useState(db.length);
  const [boolean_flag, booleanChange] = useState(false);
  const [button_flag, buttonTextChange] = useState(false);

  const [data, dataSet] = useState(false);
  var useData;
  async function fetchMyAPI() {
    let response = await fetch("http://52.79.219.137:8000/cardgame/");
    console.log(response, 1111)
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
      <div style={{textAlign:"center", verticalAlign:'middle'}}>
        <CircularDeterminate />
      </div>
    );
  }
  console.log(useData);
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
    console.log("removing: " + politicianId);
    setLastDirection(direction);
    console.log(name_array);
  };

  const outOfFrame = promiseId => {
    if (promiseId === useData.promises[0].prId) {
      flagCount(0);
    }
    console.log(promiseId + " left the screen!");
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
        <div style={{ textAlign: "center" }}>
          <h2>이 사람과 잘 맞습니다</h2>
          <img src={Congressman.pImg} style={{ width: "300px" }}></img>
          <hr></hr>
          <h3>이름: {Congressman.pName}</h3>
          <hr></hr>
          <h3>정당: {Congressman.pParty}</h3>
          <hr></hr>
          <h3>선거구: {Congressman.pConstituency}</h3>
          <hr></hr>
          <h3>당선횟수: {Congressman.pRepeat}</h3>
          <hr></hr>
          <h3>소속 위원회: {Congressman.pCommittee}</h3>
          <hr></hr>
          <h3>학력: {Congressman.pEducation}</h3>
          <hr></hr>
          <h3>주요 경력: {Congressman.pCareer}</h3>
          <hr></hr>
          <h3>연락처: {Congressman.pContact}</h3>
          <hr></hr>
          <h3>Email: {Congressman.pMail}</h3>
        </div>
      ) : (
        <div>
          <h1>공약</h1>
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
                  <h2>{promise.title}</h2>
                </div>
              </Reactcard>
            ))}
          </div>
        </div>
      )}

      {lastDirection && flag ? (
        <h2 className="infoText">이 공약을 {lastDirection}</h2>
      ) : (
        <h2 className="infoText"> </h2>
      )}
      {flag ? (
        <div>
          <h3>::</h3>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              booleanChange(!boolean_flag);
              textChange();
              fetchMyAPI();
            }}
          >
            {button_flag ? "재시작" : "결과확인"}
          </button>
        </div>
      )}
    </Grid>
  );
}

export default Cardgame;
