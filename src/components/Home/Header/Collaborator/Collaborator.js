import React from "react";
import slack from "../../../../assets/images/logos/slack.png";
import google from "../../../../assets/images/logos/google.png";
import uber from "../../../../assets/images/logos/uber.png";
import netflix from "../../../../assets/images/logos/netflix.png";
import airbnb from "../../../../assets/images/logos/airbnb.png";

const Collaborator = () => {
  return (
    <section>
      <div className="row mb-3">
        <div className="col-4 col-md-2 offset-md-1 mb-4">
          {" "}
          <img src={slack} alt="" className="img-fluid" />
        </div>
        <div className="col-4 col-md-2">
          <img src={google} alt="" className="img-fluid" />
        </div>
        <div className="col-4 col-md-2">
          {" "}
          <img src={uber} alt="" className="img-fluid" />
        </div>
        <div className="col-4 col-md-2">
          {" "}
          <img src={netflix} alt="" className="img-fluid" />
        </div>
        <div className="col-4 col-md-2">
          {" "}
          <img src={airbnb} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Collaborator;
