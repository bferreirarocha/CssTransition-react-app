/* eslint-disable default-case */
import { React, useEffect, useState, useRef } from "react";
import Logo from "../../images/logo2.svg";
import { translate } from "../../i18n/picker";
import { useSearchParams } from "react-router-dom";
import classList from "classnames";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import { selectCover } from "../../Redux/cover/slicer";

import { useSelector } from "react-redux";
function Cover() {
  const cover = useSelector(selectCover);
  const [animate, setAnimate] = useState(true);

  // const [query, setQuery] = useState('Rdn');
  //const [searchParams, setSearchParams] = useSearchParams({ cover: cover });
  const [bgImageLoaded, setBgImageLoaded] = useState(true);
  const image = `/images/covers/mobile/${cover}.jpg`;
  const element = useRef(null);
  useEffect(() => {
    // const querystring = new URLSearchParams(document.location.search);
    // const q = querystring.get('cover');
    // if (q !== null) {
    //   setQuery(q);
    // }
    // SetBgImage();
  }, []);
  // const SetBgImage = () => {
  //   load(image).then(() => {
  //     setBgImageLoaded(false);
  //     setTimeout(() => {
  //       //console.log(cover);
  //       //  element.current.style.backgroundImage = `url(${image})`;
  //     }, 1000);
  //   });
  // };

  // function load(src) {
  //   return new Promise((resolve, reject) => {
  //     const image = new Image();
  //     image.addEventListener("load", resolve);
  //     image.addEventListener("error", reject);
  //     image.src = src;
  //   });
  // }

  switch (cover) {
    case "Rdn":
      return (
        <section className={classList("Cover", cover)}>
          <div className='overlay'> </div>

          <div className='container'>
            <h1>
              Stop <br />
              fake <br />
              <span> diets!</span>{" "}
            </h1>
            <h2>
              Dietitians think, <br /> <span>you eat.</span>
            </h2>
            <h3>
              Real diets are always <br /> <span>custom-made.</span>
            </h3>
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                fill="white"
              >
                <path
                  d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                  transform="translate(10.208 10.208)"
                  fill="#000000"
                />
              </svg> */}
            <ScrollButton />
          </div>
        </section>
      );
    case "Calories":
      return (
        <section className={classList("Cover", cover)} ref={element}>
          <div className='overlay'> </div>

          <div className='container'>
            {/* <h1>
                <span> You can eat</span> <br /> everything!{" "}
              </h1> */}
            <h1>
              {" "}
              You can eat
              <br /> <span> everything!</span>{" "}
            </h1>
            <h2>
              "Just learn to <br /> <span>split calories."</span>
            </h2>
            <h3>
              We have 1 million <br /> <span>diet strategies</span>
            </h3>

            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                fill="white"
              >
                <path
                  d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                  transform="translate(10.208 10.208)"
                  fill="#000000"
                />
              </svg> */}
            <ScrollButton />
          </div>
        </section>
      );
    case "Beauty":
      return (
        <section className={classList("Cover", cover)}>
          <div className='overlay'> </div>

          <div className='container'>
            <h1
              dangerouslySetInnerHTML={{
                __html: translate("Cover", cover)[0]["title"],
              }}
            >
              {/* Stop <br /> fake <br /> <span>diets!</span>{" "} */}
            </h1>
            <h2
              dangerouslySetInnerHTML={{
                __html: translate("Cover", cover)[1]["subtitle"],
              }}
            >
              {/* Dietitians think, <br /> <span>you eat.</span> */}
            </h2>
            <h3
              dangerouslySetInnerHTML={{
                __html: translate("Cover", cover)[2]["description"],
              }}
            >
              {/* Real diets are always <span>custom-made.</span> */}
            </h3>

            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                fill="white"
              >
                <path
                  d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                  transform="translate(10.208 10.208)"
                  fill="#000000"
                />
              </svg> */}
          </div>
          {/* <ScrollButton /> */}
        </section>
      );
  }

  // eslint-disable-next-line default-case
}

export default Cover;
