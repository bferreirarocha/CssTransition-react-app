import { useEffect } from "react";
import { translate } from "../../i18n/picker";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

function Welcome() {
  const { ref: listRef, inView: listVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className='Welcome'>
      <header>
        <h1>Hello</h1>{" "}
      </header>
      <main>
        <div className='paragraph1'>
          <div
            className='line'
            dangerouslySetInnerHTML={{
              __html: translate("", "Welcome", "lines1")[0],
            }}
          ></div>{" "}
          <div
            className='line'
            dangerouslySetInnerHTML={{
              __html: translate("", "Welcome", "lines1")[1],
            }}
          ></div>
        </div>
        <div
          className='paragraph2'
          dangerouslySetInnerHTML={{
            __html: translate("", "Welcome", "lines2"),
          }}
        ></div>
        <ul className={`list ${listVisible ? "startAnimation" : ""}`} ref={listRef}>
          <li
            dangerouslySetInnerHTML={{
              __html: translate("", "Welcome", "list")[0],
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: translate("", "Welcome", "list")[1],
            }}
          ></li>
          <li
            dangerouslySetInnerHTML={{
              __html: translate("", "Welcome", "list")[2],
            }}
          ></li>
        </ul>
      </main>
    </section>
  );
}

export default Welcome;
