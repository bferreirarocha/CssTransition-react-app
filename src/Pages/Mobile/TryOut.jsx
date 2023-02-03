import { useState, useEffect } from "react";
import { translate } from "../../i18n/picker";
import calendarFood from "../../images/calendarFood.svg";
import clockW from "../../images/clockW.svg";
import locationW from "../../images/locationW.svg";
import { useInView } from "react-intersection-observer";
import { PopupButton } from "@typeform/embed-react";

function TryOut() {
  const { ref: listRef, inView: listVisible } = useInView();

  useEffect(() => {
    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className='TryOut'>
      <header>
        <h1>
          Ok... <br></br> It’s time to eat!
          <br /> <span>Let’s resume ...</span>
        </h1>
      </header>
      <main>
        <ul className={`groups ${listVisible ? "startAnimation" : ""}`} ref={listRef}>
          <li className='group firstAnimation'>
            <img src={calendarFood} />
            <div className='information'>
              <div className='line'>Eat right</div>
            </div>
          </li>
          <li className='group secondAnimation'>
            <img src={clockW} />
            <div className='information'>
              <div className='line'>Every moment.</div>
            </div>
          </li>
          <li className='group thirdAnimation'>
            <img src={locationW} />
            <div className='information'>
              <div className='line'>Everywhere.</div>
            </div>
          </li>
        </ul>
        <div className='offer fourthAnimation'>
          <div className='now'>Try now!</div>
          <div className='free'>It's completely free.</div>
          {/* <button className="start">
            {" "}
           
          </button> */}
          <PopupButton id='fmxz37' style={{ fontSize: "5vw" }} className='start'>
            Start
          </PopupButton>
        </div>

        {/* <input type="email" name="email" id="email" /> */}
      </main>
    </section>
  );
}

export default TryOut;
