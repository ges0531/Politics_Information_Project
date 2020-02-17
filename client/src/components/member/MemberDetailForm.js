import React from "react";

function MemberDetailForm({ politician }) {
  return (
    <div>
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              {" "}
              <h4>User Profile</h4>
            </div>
            <div className="panel-body">
              <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                <img
                  alt="User Pic"
                  src={politician.pImg}
                  id="profile-image1"
                  className="img-responsive"
                />
              </div>
              <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                <div className="container">
                  <h2>{politician.pName}</h2>
                  <p>{politician.pParty}</p>
                </div>
                <hr />
                <ul className="container details">
                  <li>
                    <p>
                      <span
                        className="glyphicon glyphicon-map-marker"
                        style={{ width: "50px" }}
                      />
                      {politician.pConstituency}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span
                        className="glyphicon glyphicon-thumbs-up"
                        style={{ width: "50px" }}
                      />
                      {politician.pRepeat}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span
                        className="glyphicon glyphicon-user"
                        style={{ width: "50px" }}
                      />
                      {politician.pCareer}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetailForm;
