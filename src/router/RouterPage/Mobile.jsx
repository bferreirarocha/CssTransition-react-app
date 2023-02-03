import { useNavigate, useSearchParams, createSearchParams, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import MobileRdn from "../../Layouts/Mobile/MobileRdn";
import MobileCalories from "../../Layouts/Mobile/MobileCalories";
import MobileBeauty from "../../Layouts/Mobile/MobileBeauty";

const MobileRoute = ({ query }) => {
  const [slideOut, setSlideOut] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {};
  }, []);

  const MediaLayout = () => {
    switch (query) {
      case "Rdn":
        return <MobileRdn query={query} />;
      case "Calories":
        return <MobileCalories query={query} />;
      case "Beauty":
        return <MobileBeauty query={query} />;
      default:
        break;
    }
  };

  return (
    <div className='Mobile' onScroll={scrollFunction}>
      <MediaLayout />
      <button
        className='GoTop'
        onClick={scrollToTop}
        style={{ display: showButton ? "flex" : "none" }}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 85.248 85.248'>
          <path
            d='M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z'
            transform='translate(10.208 10.208)'
            fill='#000000'
          />
        </svg>
      </button>
    </div>
  );
};

export default MobileRoute;
