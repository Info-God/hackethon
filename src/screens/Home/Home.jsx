import React from "react";
import { Button } from "../../components/Button";
import { Component } from "../../components/Component";
import { Component1 } from "../../components/Component1";
import { Component4 } from "../../components/Component4";
import { Component6 } from "../../components/Component6";
import { Component7 } from "../../components/Component7";
import { DivWrapper } from "../../components/DivWrapper";
import { PlaceboxInfo } from "../../components/PlaceboxInfo";
import { PropertyFrameWrapper } from "../../components/PropertyFrameWrapper";
import { Login } from "../Login/Login.jsx";
import React, { useState } from "react";
import { Register } from "../Register/Register.jsx";
import "./style.css";

export const Home = () => {
  // Login
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const LoginOpen = () => {
    setIsLoginOpen(true);
  };
  const LoginClose = () => {
    setIsLoginOpen(false);

    // // Register
    // const [isRegisterOpen,setRegisterOpen]=useState(false);
    // const RegisterOpen=()=>{
    //   setRegisterOpen(true);
    // }

    // const RegisterClose=()=>{
    //   setRegisterOpen(false);
    // }
  };
  return (
    <>
      <Login show={isLoginOpen} handleClose={LoginClose} />
      <Register show={isLoginOpen} handleClose={LoginClose} />

      <div className={`HOME  ${isLoginOpen ? "blurred" : ""} `}>
        <div className={`div-2  `}>
          <div className={`overlap`}>
            <footer className="footer">
              <div className="overlap-group-8">
                <div className="frame-2">
                  <div className="text-wrapper-13">Resources</div>
                  <div className="frame-3">
                    <div className="text-wrapper-14">Institutions</div>
                    <div className="text-wrapper-15">Research</div>
                    <div className="text-wrapper-15">Terms &amp; Condition</div>
                  </div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-13">Support</div>
                  <div className="frame-3">
                    <div className="text-wrapper-16">Guidelines</div>
                    <div className="text-wrapper-15">Help Center</div>
                    <div className="text-wrapper-15">Privacy Policy</div>
                  </div>
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-13">Company</div>
                  <div className="frame-3">
                    <div className="text-wrapper-14">About Us</div>
                    <div className="text-wrapper-15">Journals</div>
                    <div className="text-wrapper-15">Latest Updates</div>
                  </div>
                </div>
                <div className="text-wrapper-17">News Letter</div>
                <p className="text-wrapper-18">
                  Enter your Email address and get updates directly to your
                  email
                </p>
                <div className="text-wrapper-19">Get Monthly Updates</div>
                <img className="line" alt="Line" src="/img/line-2.svg" />
                <img className="line-2" alt="Line" src="/img/line-3.svg" />
                <img
                  className="ep-back-7"
                  alt="Ep back"
                  src="/img/ep-back-6.svg"
                />
                <div className="group-9">
                  <div className="text-wrapper-20">Follow Us On</div>
                  <img
                    className="iconoir-facebook"
                    alt="Iconoir facebook"
                    src="/img/iconoir-facebook.svg"
                  />
                  <img
                    className="hugeicons-instagram"
                    alt="Hugeicons instagram"
                    src="/img/hugeicons-instagram.svg"
                  />
                  <img
                    className="devicon-twitter"
                    alt="Devicon twitter"
                    src="/img/devicon-twitter.svg"
                  />
                </div>
              </div>
            </footer>
            <div className="group-10">
              <div className="frame-6">
                <div className="element-xyz-colony">
                  111 xyz colony,&nbsp;&nbsp;
                  <br />
                  1515, Chennai.
                </div>
                <div className="text-wrapper-21">abc@gmail.com</div>
                <div className="text-wrapper-22">+88015-88888-9999</div>
              </div>
              <div className="text-wrapper-20">Location</div>
            </div>
          </div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                Elevate Your Research, Expand
                <br />
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-23">Your Network</span>
            </p>
          </div>
          <div className="text-wrapper-24">Institutions</div>
          <div className="frame-wrapper">
            <div className="frame-7">
              <div className="frame-8">
                <div className="md-wrapper">
                  <p className="md-2">
                    <span className="text-wrapper-25">Your Name </span>
                    <span className="text-wrapper-26">*</span>
                  </p>
                </div>
                <div className="md-wrapper">
                  <p className="md-2">
                    <span className="text-wrapper-25">Your Email </span>
                    <span className="text-wrapper-26">*</span>
                  </p>
                </div>
                <div className="md-wrapper">
                  <p className="md-2">
                    <span className="text-wrapper-25">Your Phone </span>
                    <span className="text-wrapper-26">*</span>
                  </p>
                </div>
              </div>
              <PlaceboxInfo
                className="placebox-info-instance"
                text="Your Message"
              />
              <Button
                button="primary"
                className="button-instance"
                hover={false}
                text="Send Message"
              />
            </div>
          </div>
          <p className="focused-to">
            Focused to publishing significant&nbsp;&nbsp;research. Let’s make a
            Positive change, together. Are you in?
          </p>
          <div className="frame-9">
            <div className="text-wrapper-27">Upload Your Article</div>
            <img className="ep-back-8" alt="Ep back" src="/img/ep-back-7.svg" />
          </div>
          <div className="frame-10">
            <div className="text-wrapper-27">View All</div>
          </div>
          <div className="searchbar">
            <div className="group-11">
              <img
                className="carbon-search"
                alt="Carbon search"
                src="/img/carbon-search.svg"
              />
              <p className="text-wrapper-28">What are you Looking for?</p>
            </div>
          </div>
          <header className="HEADER">
            <div className="group-12">
              <div className="navbar">
                <div className="text-wrapper-29">HOME</div>
                <div className="text-wrapper-30">ABOUT US</div>
                <div className="text-wrapper-31">CONTACT US</div>
                <div className="text-wrapper-32">JOURNALS</div>
                <div className="text-wrapper-33">INSTITUTIONS</div>
              </div>
              <div className="frame-11">
                <button className="text-wrapper-34" onClick={LoginOpen}>
                  Login
                </button>
              </div>
              <div className="frame-12">
                <button className="text-wrapper-35" onClick={LoginOpen}>
                  Register
                </button>
              </div>
              <div className="text-wrapper-36">LOGO</div>
            </div>
            <img className="line-3" alt="Line" src="/img/line-4.svg" />
          </header>
          <div className="overlap-2">
            <div className="overlap-3">
              <p className="text-wrapper-37">
                Be Part of a Global Research Network!
              </p>
              <img
                className="rectangle-6"
                alt="Rectangle"
                src="/img/rectangle-39.png"
              />
            </div>
            <p className="your-research">
              <span className="text-wrapper-38">
                Your Research Journey Begins Here,{" "}
              </span>
              <span className="text-wrapper-39">
                Create Your Profile and Collaborate on Cutting-Edge Studies.
              </span>
            </p>
            <div className="frame-13">
              <div className="text-wrapper-27">Create Your Profile</div>
            </div>
          </div>
          <div className="overlap-4">
            <img
              className="rectangle-7"
              alt="Rectangle"
              src="/img/rectangle-40.png"
            />
            <img
              className="rectangle-8"
              alt="Rectangle"
              src="/img/rectangle-40-1.png"
            />
          </div>
          <div className="group-13">
            <div className="text-wrapper-40">Discover Our Mission</div>
            <div className="text-wrapper-41">Innovate, Connect, Publish</div>
            <p className="text-wrapper-42">
              Uniting Researchers for a Better Tomorrow
            </p>
            <p className="your-work-will">
              Your work will impact international journal researchers outside
              your field and potentially increase exposure.With open access, any
              international journal researcher can read and create on the
              findings of others without impediment and without paying any fee,
              accelerating the author&#39;s discoveries among all.
            </p>
            <p className="increase-your-work-s">
              Increase your work&#39;s visibility, availability, and readership
              online, which attracts good citations through international
              journal papers.All articles are evaluated using standards,
              including the international research publication or ideas&#39;
              excellence, novelty, and significance.
            </p>
            <img
              className="rectangle-9"
              alt="Rectangle"
              src="/img/rectangle-36.png"
            />
            <img
              className="rectangle-10"
              alt="Rectangle"
              src="/img/rectangle-37.png"
            />
          </div>
          <img
            className="rectangle-11"
            alt="Rectangle"
            src="/img/rectangle-44.png"
          />
          <div className="group-14">
            <div className="text-wrapper-20">Follow Us On</div>
            <img
              className="iconoir-facebook-2"
              alt="Iconoir facebook"
              src="/img/devicon-twitter-1.png"
            />
            <img
              className="hugeicons-instagram-2"
              alt="Hugeicons instagram"
              src="/img/devicon-twitter-1.png"
            />
            <img
              className="devicon-twitter-2"
              alt="Devicon twitter"
              src="/img/devicon-twitter-1.png"
            />
          </div>
          <div className="overlap-5">
            <div className="group-15" />
            <div className="group-16">
              <div className="group-wrapper">
                <div className="group-17">
                  <div className="group-18">
                    <div className="text-wrapper-43">6</div>
                    <div className="journals"> Journals</div>
                  </div>
                  <img
                    className="bi-journals"
                    alt="Bi journals"
                    src="/img/bi-journals.svg"
                  />
                </div>
              </div>
              <div className="group-19">
                <div className="group-20">
                  <div className="text-wrapper-44">250+</div>
                  <div className="text-wrapper-45">Editorial Members</div>
                  <img
                    className="fluent-publish"
                    alt="Fluent publish"
                    src="/img/fluent-mdl2-publish-course.svg"
                  />
                </div>
              </div>
              <div className="group-21">
                <div className="text-wrapper-46">2500+</div>
                <div className="text-wrapper-45">Papers Published</div>
                <img
                  className="mdi-paper-outline"
                  alt="Mdi paper outline"
                  src="/img/mdi-paper-outline.svg"
                />
              </div>
              <div className="group-22">
                <div className="group-23">
                  <div className="group-24">
                    <div className="text-wrapper-47">100%</div>
                    <div className="text-wrapper-48">Peer Reviewed</div>
                  </div>
                </div>
                <img
                  className="carbon-review"
                  alt="Carbon review"
                  src="/img/carbon-review.svg"
                />
              </div>
            </div>
          </div>
          <div className="overlap-6">
            <img className="ep-back-9" alt="Ep back" src="/img/ep-back-8.svg" />
            <p className="text-wrapper-49">
              We publish mission-driven engineering, technology, and scientific
              research that addresses pressing societal issues in line with the
              future. In order to free research paper publication that affects
              thinking, changes policies, and positively impacts lives outside
              of academia, we cooperate with academics who work across
              disciplines and nations as well as with industry
            </p>
            <div className="text-wrapper-50">Explore Our Categories</div>
            <div className="text-wrapper-51">Swipe</div>
            <Component className="component-3" property1="frame-865" />
            <PropertyFrameWrapper
              className="component-5"
              epBack="/img/ep-back-11.svg"
              property1="frame-865"
              rectangle="/img/rectangle-41-7.png"
            />
            <DivWrapper
              className="component-8"
              epBack="/img/ep-back-11.svg"
              property1="frame-874"
              rectangle="/img/rectangle-41-8.png"
            />
            <div className="frame-14">
              <Component6
                className="component-6"
                epBack="/img/ep-back-12.svg"
                property1="frame-869"
              />
              <Component7
                className="component-7"
                epBack="/img/ep-back-13.svg"
                property1="frame-873"
              />
              <Component4
                className="component-4"
                epBack="/img/ep-back-14.png"
                property1="frame-867"
              />
            </div>
          </div>
          <Component1
            className="component-instance"
            divClassName="component-1-instance"
            property1="frame-868"
          />
          <div className="text-wrapper-52">Contact Us</div>
        </div>
      </div>
    </>
  );
};
