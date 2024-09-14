
import "./style.css";

export const Register = ({show,handleClose}) => {

  if(!show) return null;
  return (
    
      <div className={`frame ${show ? 'show':''}`}>
        <div className="overlap-group">
          <div className="group">
            <div className="searchbar">
              <div className="div-wrapper">
                <div className="text-wrapper">First Name</div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper">Last Name</div>
              </div>
            </div>
            <div className="div">
              <img className="img" alt="Flat color icons" src="/img/flat-color-icons-google.svg" />
              <div className="group-2">
                <div className="text-wrapper">LOGIN WITH GOOGLE</div>
              </div>
            </div>
            <div className="searchbar-2">
              <img className="img" alt="Logos facebook" src="/img/logos-facebook.svg" />
              <div className="group-2">
                <div className="text-wrapper">LOGIN WITH FACEBOOK</div>
              </div>
            </div>
            <div className="searchbar-wrapper">
              <div className="searchbar-3">
                <div className="group-3">
                  <div className="text-wrapper">Password</div>
                </div>
              </div>
            </div>
            <p className="p">By clicking Sign Up, you agree to our Terms</p>
            <div className="div-wrapper-2">
              <div className="text-wrapper-2">Sign Up</div>
            </div>
            <div className="group-4">
              <div className="text-wrapper-3">or</div>
              <img className="line" alt="Line" src="/img/line-5.svg" />
              <img className="line-2" alt="Line" src="/img/line-6.svg" />
            </div>
          </div>
          <img className="aimscopefour" alt="Aimscopefour" src="/img/aimscopefour-e70e3d5a-1.png" />
          <div className="searchbar-4">
            <div className="group-3">
              <div className="text-wrapper">Email</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-4">LOGO <button className="close-button" onClick={handleClose}>&times;</button></div>
      </div>
  
  );
};
