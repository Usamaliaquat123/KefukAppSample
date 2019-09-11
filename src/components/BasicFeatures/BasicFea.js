import React from "react";
import bachi from "./../../assets/images/features/bachi.png";
import tharkiMedal from "./../../assets/images/features/tharki_medal.png";
import tharkiTeacher from "./../../assets/images/features/tharki_teacher.png";
import "./BasicFeaStyles.css";
import facebook from "./../../assets/images/Home/Icons/facebook.png";
import twitter from "./../../assets/images/Home/Icons/twitter.png";
import instagram from "./../../assets/images/Home/Icons/instagram.png";
import wifi from "./../../assets/images/Home/Icons/wifi.png";
import youtube from "./../../assets/images/Home/Icons/youtube.png";
const BasicFea = () => {
  return (
    <div className="containerOverlayFeatures">
      <div className="container-fluid">
        <div className="containerStyleFeatures">
          <div className="row">
            <div className="col-sm-12 col-md-4 text">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={bachi} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Support a Child</p>
                <p className="containerDdescFea">
                  {" "}
                  You have the opportunity to impact the lioves of children and
                  families surrounded by poverty. It is through your generosity
                  that we can create a powerfull change.{" "}
                </p>
                <a href="/Schools" className="containerButtonFea">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={tharkiTeacher} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Teacher Training</p>
                <p className="containerDdescFea">
                  {" "}
                  KEF made a concise decision to invest in establishing and
                  developing our own College of Teacvher Education to promote
                  advanced cognitive performance
                </p>
                <z href="/Teachers" className="containerButtonFea">
                  Read more
                </z>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 text1">
              <div className="cardCcontainerFeatures">
                <div className="containerImageFeatures">
                  <img src={tharkiMedal} width="260" height="160"></img>
                </div>
                <p className="cardHeadingFea">Volunteer and Fundraising</p>
                <p className="containerDdescFea">
                  You can transform a child's world. Wheather it is by
                  volunteering or by participating in fund raisers.
                </p>
                <a href="/Schools" className="containerButtonFea">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={basicFeature.socialMediaTab}>
        <div className={basicFeature.followUsText}>FOLLOW US</div>
        <img
          className='socialIcons'
          class='img-fluid'
          src={facebook}
        ></img>
        <img
          className='socialIcons'
          src={youtube}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={instagram}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={wifi}
          class='img-fluid'
        ></img>
        <img
          className='socialIcons'
          src={twitter}
            class='img-fluid'
        ></img>
      </div> */}

      <div className="socialMediaTabFea">
        <div className="followUsTextFea">FOLLOW US</div>
        <img className="socialIconsFea" src={facebook}></img>
        <img className="socialIconsFea" src={youtube} class="img-fluid"></img>
        <img className="socialIconsFea" src={instagram} class="img-fluid"></img>
        <img className="socialIconsFea" src={wifi} class="img-fluid"></img>
        <img className="socialIconsFea" src={twitter} class="img-fluid"></img>
      </div>
    </div>
  );
};

export default BasicFea;
