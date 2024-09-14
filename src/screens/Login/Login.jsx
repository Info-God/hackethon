
import "./style.css";

export const Login = ({show,handleClose}) => {
  if(!show) return null;
  return (
    
      
        <div className={`frame ${show ?'show':''}`}>
          <div className="overlap">
            <div className="group">
              <div className="searchbar">
                <div className="div-wrapper">
                  <div className="text-wrapper">Email</div>
                </div>
              </div>
              <div className="div">
                <div className="text-wrapper-2">Email</div>
              </div>
              <div className="searchbar-2">
                <img className="img" alt="Flat color icons" src="/img/flat-color-icons-google.svg" />
                <div className="group-2">
                  <div className="text-wrapper">LOGIN WITH GOOGLE</div>
                </div>
              </div>
              <div className="searchbar-3">
                <div className="group-3">
                  <div className="text-wrapper">SIGN IN WITH APPLE</div>
                </div>
                <img className="ic-baseline-apple" alt="Ic baseline apple" src="/img/ic-baseline-apple.svg" />
              </div>
              <div className="searchbar-4">
                <img className="img" alt="Logos facebook" src="/img/logos-facebook.svg" />
                <div className="group-2">
                  <div className="text-wrapper">LOGIN WITH FACEBOOK</div>
                </div>
              </div>
              <div className="overlap-group">
                <div className="group-4">
                  <div className="group-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper">Password</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Password</div>
                </div>
                <div className="text-wrapper-3">Password Reset</div>
                <img className="ep-question-filled" alt="Ep question filled" src="/img/ep-question-filled.svg" />
              </div>
              <p className="p">Remember me on this computer</p>
              <p className="don-t-have-an">
                <span className="span">Don’t have an account?&nbsp;&nbsp;</span>
                <span className="text-wrapper-4">Sign up</span>
              </p>
              <div className="div-wrapper-2">
                <div className="text-wrapper-5">Login</div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-6">or</div>
                <img className="line" alt="Line" src="/img/line-5.svg" />
                <img className="line-2" alt="Line" src="/img/line-6.svg" />
              </div>
              <div className="rectangle" />
            </div>
            <img className="aimscopefour" alt="Aimscopefour" src="/img/aimscopefour-e70e3d5a-1.png" />
          </div>
          <div className="text-wrapper-7">LOGO <button className="close-button" onClick={handleClose}>&times;</button></div>
        </div>
    
  
  );
};
