import { React, useState, useEffect } from 'react';
import location from '../../images/location.svg';
import food from '../../images/food.svg';
import delivery from '../../images/delivery.svg';
import { translate } from '../../i18n/picker';
import ScrollNavigator from '../../components/ScrollNavigator/ScrollNavigator';

function OnTheGo({ style, NaviateTo, effect }) {
  //const [slideEffect, setSlideEffect] = useState(false);
  useEffect(() => {}, []);

  const [slideOut, setSlideOut] = useState(false);
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      setSlideOut(true);
      NaviateTo(1);
    } else {
      NaviateTo(-1);
    }
  };
  return (
    <section
      // className={`Feature Content OnTheGo ${slideOut ? "SlideExit" : ""}`}
      className={`Feature Content OnTheGo ${effect} ${slideOut ? 'SlideExit' : ''}`}
      onWheel={WheelHandler}
    >
      <header>
        {/* <HeaderContent style={style} />  */}
        <div
        // dangerouslySetInnerHTML={{
        //   __html: translate("Start", "title"),
        // }}
        >
          Stay on diet "On The Go"
        </div>
      </header>
      <main>
        <ul className='body'>
          <li className='group'>
            <img src={location} />
            <div className='title'>
              {/* <div className="copy1">Diet</div> */}
              <div className='line'>
                <span>Diet follows you.</span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  Don't screws up your diet <br /> because you're not at home! <br />
                </div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  Are you on vacation,
                  <br /> business trip or
                  <br /> out for dinner?
                </div>
                <div className='line'>
                  We will help you find the,
                  <br /> <span> best choice on-the-go</span>
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={food} />
            <div className='title'>
              <div className='line'>
                <span>
                  Stay on diet <br /> having fun!
                </span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  We'll show you the best <br /> place to find your diet menu.
                </div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  We collaborate with healthy{' '}
                  <span>
                    restaurants, <br /> bars & hotels
                  </span>
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={delivery} />
            <div className='title'>
              <div className='line'>
                <span>Eat right food</span>
              </div>
              <div className='line'>
                <span> at the right time.</span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  Are you at home and don't <br /> want to cook, <br /> or are you in the office?
                </div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  We will link your diet plan <br /> to <span> Healthy Food Delivery</span> <br />
                  services in your area.{' '}
                </div>
              </div>
            </div>
          </li>
        </ul>
        <ScrollNavigator index={3} />
      </main>
    </section>
  );
}

export default OnTheGo;
