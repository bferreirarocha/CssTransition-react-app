import React from "react";
import { translate } from "../../i18n/picker";
import Onemillion from "../../images/1million.svg";
import center from "../../images/center.svg";
import i30k from "../../images/30k.svg";
import i20k from "../../images/20k.svg";
import { useInView } from "react-intersection-observer";
function StayOnDiet() {
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={`StayOnDiet `}>
      {" "}
      <header>
        <h1>
          {" "}
          Stay on diet <br /> <span>with</span>
        </h1>
      </header>
      <main>
        <div
          className={`container ${listVisible ? "startAnimation" : ""}`}
          ref={listRef}
        >
          <img className="firstAnimation" src={Onemillion} alt={Onemillion} />
          <img className="secondAnimation" src={i30k} alt={i30k} />
          <img className="thirdAnimation" src={i20k} alt={i20k} />
        </div>
      </main>
    </section>
  );
}

export default StayOnDiet;
