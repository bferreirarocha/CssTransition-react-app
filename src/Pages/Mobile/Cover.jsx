import { React, useEffect, useState } from "react";
import Logo from "../../images/logo2.svg";

import classList from "classnames";

function Cover() {
  const [query, setQuery] = useState("Rdn");
  useEffect(() => {
    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");

    if (q !== null) {
      setQuery(q);
    }
    // setSearchParams({ cover: query });
    // navigate({
    //   pathname: "/",
    //   search: `?${createSearchParams(searchParams)}`,
    // });

    return () => {};
  }, []);
  return (
    <section className={classList("Cover", query)}>
      <div className="overlay"> </div>

      <div className="container">
        <div>
          <h1>
            Stop fake <span>diets!</span>{" "}
          </h1>
          <h2>
            Dietitians think, <span>you eat.</span>
          </h2>
          <h3>
            Real diets are awlyes <span>custom-made.</span>
          </h3>
        </div>
        {/* <div className="logo">
          <img src={Logo} alt="" />
        </div> */}
        {/* <button>
          learn more!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 85.248 85.248"
            fill="white"
          >
            <path
              d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
              transform="translate(10.208 10.208)"
              fill="#000000"
            />
          </svg>
        </button> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85.248 85.248"
          fill="white"
        >
          <path
            d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
            transform="translate(10.208 10.208)"
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  );
}

export default Cover;
