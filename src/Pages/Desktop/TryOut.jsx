import { React, useState } from "react";
import { translate } from "../../i18n/picker";
import calendarFood from "../../images/calendarFood.svg";
import clockW from "../../images/clockW.svg";
import locationW from "../../images/locationW.svg";
import ScrollNavigator from "../../components/ScrollNavigator/ScrollNavigator";
import { PopupButton } from "@typeform/embed-react";

function TryOut({ NaviateTo }) {
  function sendEmail() {
    window.location = "mailto:info@eat-project.com";
  }

  const [slideOut, setSlideOut] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
      NaviateTo(1);
    } else if (e.deltaY < 0) {
      // setSlideOut(true);
      NaviateTo(-1);
    }
  };
  const onClickhandler = () => {};

  return (
    <section className={`TryOut Content ${slideOut ? "SlideExit" : ""}`} onWheel={WheelHandler}>
      <header>
        <div>Ok. It’s time to eat!</div>
        <span>Let’s resume ...</span>
      </header>
      <main>
        <div className='body'>
          <div className='row firstRow'>
            <div className='group firstTransition'>
              <div className='cover'>
                <img src={calendarFood} />
              </div>
              <span>Eat right</span>
            </div>
            <div className='group secondTransition'>
              <div className='cover'>
                <img src={clockW} />
              </div>
              <span>Every moment</span>
            </div>
            <div className='group thirdTransition'>
              <div className='cover'>
                <img src={locationW} />
              </div>
              <span>Everywhere</span>
            </div>
          </div>
          <div className='row secondRow'>
            <div className='group'>
              <div className='what'>
                <span>Try now!</span>
                <span>It's completely free.</span>
              </div>
            </div>
            <div className='group'>
              {/* <button onClick={onClickhandler}>Start</button> */}
              {/* <button
                data-tf-slider="fmxz37"
                data-tf-position="right"
                data-tf-opacity="100"
                data-tf-iframe-props="title=Eat-Project (people) (Skin Diet)"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                // css="margin-top: 4px;"
                css="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"
              >
                Try me!
              </button> */}
              <PopupButton id='fmxz37' style={{ fontSize: 20 }} className='my-button'>
                Start
              </PopupButton>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='group'>
            {/* <span @click="$emit('changePage', 8)">About us</span> 
                 <span @click="$emit('changePage', 9)">Contact us</span>  */}
            <span onClick={sendEmail}>Contact us</span>
            <span>Privacy</span>
            <span>Cookies</span>
          </div>
          <div className='group'>
            <span>Copyright © {new Date().getFullYear()}, Eat-project</span>
          </div>
        </div>
        <ScrollNavigator index={6} />
      </main>
    </section>
  );
}

export default TryOut;
