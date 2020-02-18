import React, { useState } from "react";
import "./Test.css";

const questions = [
  {
    question:
      "대북 지원단체가 최근 북한에 중증 결핵 치료를 위한 약품과 물품을 보냈습니다. 북한이 4차 핵실험을 했는데도 지원해야 하느냐는 논란이 일었죠.",
    question_2: "대북 지원, 어떻게 해야 할까요?",
    answer_1: "적극 확대",
    answer_2: "지원하되 북한 변화 유도",
    answer_3: "북한 변화를 봐가며 지원",
    answer_4: "전면 중단",
    effect: {
      score: 1
    }
  },
  {
    question:
      "미국이냐 중국이냐. 중국이 G2로 떠오르면서 미국 중심의 외교 정책도 달라져야 한다는 주장이 나옵니다.",
    question_2: "외교, 미국을 탈피해야 할까요?",
    answer_1: "매우 동의",
    answer_2: "동의",
    answer_3: "반대",
    answer_4: "매우 반대",
    effect: {
      score: 1
    }
  },
  {
    question:
      "국가보안법을 놓고 자유를 억압하는 도구일 뿐이란 주장과 남북 대치 상황에서 안보를 위해 불가결하다는 주장이 맞서는데요.",
    question_2: "국가보안법, 어떻게 해야 할까요?",
    answer_1: "전면 폐지",
    answer_2: "남용 줄이도록 개정",
    answer_3: "신중히 적용",
    answer_4: "엄격히 적용",
    effect: {
      score: 1
    }
  },
  {
    question:
      "개성공단이 전면 중단됐습니다. 북한이 아니라 우리가 멈춘 건 이번이 처음이었습니다.",
    question_2: "개성공단, 어떻게 해야 할까요?",
    answer_1: "재개하고 확대",
    answer_2: "재개",
    answer_3: "신중히 적용",
    answer_4: "엄격히 적용",
    effect: {
      score: 1
    }
  },
  {
    question:
      "고고도 미사일 방어체계(일명 사드) 배치가 결정되었습니다. 중국은 반대하고 나섰고요.",
    question_2: "사드 배치, 국익에 도움이 되는 걸까요?",
    answer_1: "매우 아니다",
    answer_2: "아니다",
    answer_3: "그렇다",
    answer_4: "매우 그렇다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "2004년 칠레와의 자유무역협정(FTA) 이후 한국은 15개 국가와 FTA를 체결했습니다. 그때마다 반론도 만만치 않았죠.",
    question_2: "FTA가 경제 주권을 해친다고 생각하세요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "경제 성장이냐 복지 확충이냐. 선거 때마다 되풀이되는 논쟁입니다.",
    question_2: "경제 성장보다 복지 확충이 중요하다고 생각하시나요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "근로기준법 등 노동 관련 5개 법 개정안을 두고 논란입니다. 청년 일자리를 위한 개혁이란 주장과 기업 배만 불리는 개악이란 주장이 맞섭니다.",
    question_2: "노동개혁법, 개악일까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "대기업은 특정 업종엔 진출할 수 없는 등 여러가지 규제를 받습니다. 부당 내부거래를 방지하고 중소기업을 보호하는 취지지만 과도한 규제라는 반대도 만만찮죠.",
    question_2: "대기업 규제 필요할까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "부유세를 둘러싼 찬반도 팽팽합니다. 양극화 해소를 위해 부자들에게 세금을 더 걷어야 한다는 논리와 부자들의 재산 해외 은닉을 부추길 뿐이라는 놀리가 맞서는데요.",
    question_2: "도입해야 한다고 생각하시나요?",
    answer_1: "전면 도입",
    answer_2: "순차 도입",
    answer_3: "보류",
    answer_4: "반대",
    effect: {
      score: 1
    }
  },
  {
    question:
      "선거운동 기간인 12일 자정까지 주요 포털 사이트와 언론사 홈페이지에 글을 쓰려면 실명 확인을 거쳐야 합니다.",
    question_2: "인터넷 실명제, 어떻게 생각하시나요?",
    answer_1: "매우 반대",
    answer_2: "반대",
    answer_3: "동의",
    answer_4: "매우 동의",
    effect: {
      score: 1
    }
  },
  {
    question:
      "지난달 교육부가 전국 초등학생 대상 진단평가를 실시했습니다. 일제고사 부활 아니냐는 논란이 일었습니다.",
    question_2: "일제고사는 시대착오적인 걸까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "2013년 국내에서도 첫 동성 부부가 탄생했습니다. 김조광수씨와 김승환씨죠. 법적 효력은 없습니다.",
    question_2: "성적 소수자의 권리, 보장해야 할까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "종교나 양심을 이유로 병역을 거부하면 징역형을 선고받습니다. 복역 기간은 평균 1년 6개월 정도고요.",
    question_2: "양심적 병역 거부, 허용해야 할까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question:
      "지난해 12월 복면이나 마스크를 쓰고 집회에 참가하면 처벌 받는 법이 발의됐습니다.",
    question_2: "집회와 시위의 자유, 폭넓게 허용하는 게 맞을까요?",
    answer_1: "매우 그렇다",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question: "결과 보기",
    answer_1: "결과 보기",
    answer_2: "그렇다",
    answer_3: "아니다",
    answer_4: "매우 아니다",
    effect: {
      score: 1
    }
  },
  {
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    effect: {
      score: 1
    }
  }
];

function Test() {
  // var max_score; // Max possible scores
  // var qn = 0; // Question number
  // var prev_answer = null;
  const [qn, setQn] = useState(0);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [result_flag, setResult] = useState(false);

  // init_question();
  // for (var i = 0; i < questions.length; i++) {
  //   max_score += Math.abs(questions[i].effect.score);
  // }

  function init_question() {
    // console.log(questions[qn].question);
    setCount(qn);
    // console.log(score);
    // setCount(qn);
    // document.getElementById("question-text").innerHTML = questions[qn].question;
    // document.getElementById("question-number").innerHTML =
    //   "문제 " + (qn + 1) + "/" + questions.length;
    // if (prev_answer == null) {
    //   document.getElementById("back_button").style.display = "none";
    //   document.getElementById("back_button_off").style.display = "block";
    // } else {
    //   document.getElementById("back_button").style.display = "block";
    //   document.getElementById("back_button_off").style.display = "none";
    // }
  }

  function next_question(mult) {
    setScore(score + mult);
    // score += mult * questions[qn].effect.score;
    setQn(qn + 1);
    // prev_answer = mult;
    if (qn < questions.length - 2) {
      init_question();
    } else {
      // results();
      calc_score(score);
    }
  }
  // function prev_question() {
  //   if (prev_answer == null) {
  //     return;
  //   }
  //   setQn(qn - 1);
  //   score -= prev_answer * questions[qn].effect.score;
  //   prev_answer = null;
  //   init_question();
  // }
  function calc_score(score) {
    setScore((score / 15).toFixed(1));
    // return ((100 * (max + score)) / (2 * max)).toFixed(1);
  }
  // function results() {
  //   location.href =
  //     `results.html` +
  //     `?e=${calc_score(econ, max_econ)}` +
  //     `&d=${calc_score(dipl, max_dipl)}` +
  //     `&g=${calc_score(govt, max_govt)}` +
  //     `&s=${calc_score(scty, max_scty)}`;
  // }
  window.scrollTo(0, 0)
  return (
    <div>
      <h2 style={{ textAlign: "center" }} id="question-number">
        정치성향테스트
      </h2>
      {qn < questions.length - 2 ? (
        <div>
          {/* <p className="question" id="question-text" /> */}
          <p className="question" style={{ fontSize: "24px", blockSize: "100px" }}>
            {questions[qn].question}
          </p>
          <hr />
          <p className="question" style={{ fontSize: "36px" }}>
          {questions[qn].question_2}
          </p>
          <button
            className="button_test"
            onClick={() => {
              next_question(0);
            }}
            style={{ backgroundColor: "#1b5e20" }}
          >
            {questions[qn].answer_1}
          </button>{" "}
          <br />
          <button
            className="button_test"
            onClick={() => {
              next_question(3.3);
            }}
            style={{ backgroundColor: "#4caf50" }}
          >
            {questions[qn].answer_2}
          </button>{" "}
          <br />
          <button
            className="button_test"
            onClick={() => {
              next_question(5);
            }}
            style={{ backgroundColor: "#bbbbbb" }}
          >
            잘 모르겠음
          </button>{" "}
          <br />
          <button
            className="button_test"
            onClick={() => {
              next_question(6.7);
            }}
            style={{ backgroundColor: "#f44336" }}
          >
            {questions[qn].answer_3}
          </button>{" "}
          <br />
          <button
            className="button_test"
            onClick={() => {
              next_question(10);
            }}
            style={{ backgroundColor: "#b71c1c" }}
          >
            {questions[qn].answer_4}
          </button>{" "}
          {/* <br />
          <button
            className="small_button"
            onClick={() => {
              prev_question();
            }}
            id="back_button"
          >
            뒤로
          </button> */}
          {/* <button className="small_button_off" id="back_button_off">
        뒤로
      </button> */}
          <br />
        </div>
      ) : (
        <div>
        {result_flag ? (
          <div style={{ textAlign: "center", marginTop:"100px" }}>
            <div>
              <h3>제 점수는요?</h3>
              <p style ={{fontSize: '24px'}}>
                {score}점
              </p>
              <p className="text-center">
                결과값은 각 설문 ①0점 ②3.3점 ③6.7점 ④10점으로 <br /> 계산해 다
                더한 뒤 15로 나눈 값 입니다.
              </p>
              <img
                src="https://images.joins.com/newsroom/myPoliticsTest/p16_graph.png"
                alt=""
                style={{ margin: "15px 0", maxWidth: "100%" }}
              />
            </div>
          </div>
        ) : (
          <button
          className="button_test"
          onClick={() => {
            setResult(!result_flag)
            next_question(0);
          }}
          style={{ backgroundColor: "#b71c1c", marginTop: "100px" }}
        >
          결과보기
        </button>
        )}
      </div>
      )}
    </div>
  );
}

export default Test;
