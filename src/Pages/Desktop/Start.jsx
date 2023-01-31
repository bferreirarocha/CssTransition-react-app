import { React, useState, useEffect } from 'react';
import clock from '../../images/clock.svg';
import doctor from '../../images/doctor.svg';
import calendar from '../../images/calendar.svg';
import { translate } from '../../i18n/picker';
import ScrollNavigator from '../../components/ScrollNavigator/ScrollNavigator';

function Start({ style, NaviateTo, effect }) {
  const [slideEffect, setSlideEffect] = useState();
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
  useEffect(() => {
    return () => {
      //slideEffect("SlideExit");
    };
  }, []);
  return (
    <section
      className={`Feature Content ${style} ${slideOut ? 'SlideExit' : ''}`}
      // className={`Feature Content ${style} ${slideEffect}`}
      onWheel={WheelHandler}
    >
      <header>
        {/* <HeaderContent style={style} />  */}
        <div
          dangerouslySetInnerHTML={{
            __html: translate('Start', 'title'),
          }}
        ></div>
      </header>
      <main>
        <ul className='body'>
          <li className='group'>
            <img src={doctor} />
            <div className='title'>
              <div className='line'>
                <span>
                  Get in touch <br /> with dietitians
                </span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>
                  We have the <span>biggest</span>
                </div>
                <div className='line'>
                  <span>dietitian & nutritionist</span>
                </div>
                <div className='line'>
                  <span>community</span>
                </div>
                <div className='line'>in the world.</div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  <span>Get in touch with them</span>
                </div>
                <div className='line'>to start learning about</div>
                <div className='line'>
                  diet and nutrition and <br />
                  avoid <span> Medical Fake News</span>
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={clock} />
            <div className='title'>
              <div className='line'>
                <span>Pick a diet template.</span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>We have diet templates for</div>
                <div className='line'>
                  many diet's goals made by <span>real</span>
                </div>
                <div className='line'>
                  <span>dietitians!</span>
                </div>
              </div>
              <div className='paragraph'>
                <div className='line'>
                  <span>Just pick a template for </span>
                </div>
                <div className='line'>
                  <span>your diet target </span>and follow the steps.
                </div>
                <div className='line'>
                  <br /> You will be contacted by the{' '}
                  <span>
                    <br /> best dietitians
                  </span>{' '}
                  for your needs <br /> that are <span>based in your town</span>!
                </div>
              </div>
            </div>
          </li>
          <li className='group'>
            <img src={calendar} />
            <div className='title'>
              <div className='line'>
                <span> Eat the right food</span> <br />
              </div>
              <div className='line'>
                <span> at the right time.</span>
              </div>
            </div>
            <div className='description'>
              <div className='paragraph'>
                <div className='line'>We will suggest you</div>
                <div className='line'>
                  the <span>right food to eat,</span>
                </div>

                <div className='line'>
                  <span>each day, each meal</span>
                </div>
                <div className='line'>for the entire project.</div>
              </div>
              <div className='paragraph'>
                <div className='line'>If you make mistakes,</div>
                <div className='line'>don't worry!</div>
                <div className='line'>
                  <span>We will readapt</span> everything
                </div>
                <div className='line'>
                  based on: <span>"your taste & budget."</span>
                </div>
                <div className='line'></div>
              </div>
            </div>
          </li>
        </ul>
        <ScrollNavigator index={2} />
      </main>
    </section>
  );
}

export default Start;
