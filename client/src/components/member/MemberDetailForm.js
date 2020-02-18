import React from "react";

function MemberDetailForm({ politician }) {
  return (
    <div>
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              {" "}
              <h4>국회의원 정보</h4>
            </div>
            <div className="panel-body">
              <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                <img
                  alt="User Pic"
                  src={politician.pImg}
                  id="profile-image1"
                  className="img-responsive"
                  style={{width:"100%"}}
                />
              </div>
              <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                <div className="container">
                  <h2>{politician.pName}</h2>
                  <p>{politician.pParty}</p>
                </div>
                <hr />
                <ul
                  className="container details"
                  style={{ listStyle: "none", paddingLeft: "0px" }}
                >
                  <li>
                    <p>
                      {/* <span
                        className="glyphicon glyphicon-map-marker"
                        style={{ width: "50px" }}
                      /> */}
                      {politician.pConstituency}
                    </p>
                  </li>
                  <li>
                    <p>
                      {/* <span
                        className="glyphicon glyphicon-thumbs-up"
                        style={{ width: "50px" }}
                      /> */}
                      {politician.pRepeat}
                    </p>
                  </li>
                </ul>
                <hr />
                <div className="col-sm-5 col-xs-6 tital ">
                  {politician.pCommittee}
                </div>
                <div className="col-sm-5 col-xs-6 tital ">
                  {politician.pEducation}
                </div>
                <div className="col-sm-5 col-xs-6 tital ">
                  {politician.pContact}
                </div>
                <div className="col-sm-5 col-xs-6 tital ">
                  {politician.pMail}
                </div>
                <div className="col-sm-5 col-xs-6 tital ">
                  {politician.pCareer}
                </div>
                <div className="col-sm-5 col-xs-6 tital " style={{ marginTop:"50px" }}>
                  <h4>검색하러 가기</h4>
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    href={`https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=${politician.pName}`}
                  >
                    <img
                      src={
                        "https://steemitimages.com/DQmcM9KbSbvbNwrZk2cAQ5QLvZd8f6uyQL8JMtSH9tXgMqV/naver.png"
                      }
                      width="150px"
                    />
                  </a>
                </div>
                <div className="col-sm-5 col-xs-6 tital " style={{ marginTop:"50px" }}>
                  <h4>영상 보러가기</h4>
                  <a
                    style={{ display: "table-cell" }}
                    target="_blank"
                    href={`https://www.youtube.com/results?search_query=${politician.pName}`}
                  >
                    <img
                      src={
                        "https://k-napolov.com/uploads/img/page/410_1567758223.png"
                      }
                      width="150px"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetailForm;
