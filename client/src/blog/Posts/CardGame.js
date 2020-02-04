import React, { useState } from "react";
import "./Cardgame.css";
import Reactcard from "./react_card/react_card";
import Grid from "@material-ui/core/Grid";

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
  var buttonText = "결과확인";
  var flag_array = new Array();
  var name_array = [];
  var id_array = [];
  for (var i = 0; i < db.length; i++) {
    flag_array[i] = 0;
  }
  const characters = db;
  const [lastDirection, setLastDirection] = useState();
  const [flag, flagCount] = useState(db.length);
  const [boolean_flag, booleanChange] = useState(false);
  const [button_flag, buttonTextChange] = useState(false);

  const textChange = () => {
    if (button_flag) {
      buttonTextChange(!button_flag);
      flagCount(db.length);
      // name_array = [];
      // id_array = [];
    } else {
      for (var i = 0; i < db.length; i++) {
        flag_array[i] = 0;
      }
      buttonTextChange(!button_flag);
    }
  };

  const forEach = my_array => {
    for (var i = 0; i < characters.length; i++) {
      for (var j = 0; j < my_array.length; j++) {
        if (characters[i].name === my_array[j]) {
          flag_array[i] = flag_array[i] + 1;
        }
      }
    }
    return characters[flag_array.indexOf(Math.max.apply(null, flag_array))].url;
  };

  const swiped = (direction, nameToDelete) => {
    if (direction === "좋아합니다") {
      var flag_id = 0;
      for (var k = 0; k < characters.length; k++) {
        if (characters[k].name === nameToDelete) {
          if (!id_array.includes(characters[k].id)) {
            flag_id = characters[k].id;
          }
        }
      }
      if (!id_array.includes(flag_id)) {
        name_array.push(nameToDelete);
        id_array.push(flag_id);
      }
    }
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    console.log(name_array);
  };

  const outOfFrame = name => {
    if (name === characters[0].name) {
      flagCount(0);
    }
    console.log(name + " left the screen!");
  };

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
      <h1>공약</h1>
      {boolean_flag ? (
        <div>
          <h2>이 사람과 잘 맞습니다</h2>
          <img src={forEach(name_array)}></img>
        </div>
      ) : (
        <div className="cardContainer">
          {characters.map(character => (
            <Reactcard
              className="swipe"
              key={character.commit}
              onSwipe={dir => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                // style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h2>{character.commit}</h2>
              </div>
            </Reactcard>
          ))}
        </div>
      )}

      {lastDirection && flag ? (
        <h2 className="infoText">이 공약을 {lastDirection}</h2>
      ) : (
        <h2 className="infoText"> </h2>
      )}
      {flag ? (
        <div>
          <h3>:)</h3>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              booleanChange(!boolean_flag);
              textChange();
            }}
          >
            {button_flag ? ('재시작') : ('결과확인')}
          </button>
        </div>
      )}
    </Grid>
  );
}

export default Cardgame;
