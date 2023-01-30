import { React } from "react";
import "./Mobile.scss";

import Cover from "../../Pages/Mobile/Cover";
import Welcome from "../../Pages/Mobile/Welcome";
import Start from "../../Pages/Mobile/Start";
import OnTheGo from "../../Pages/Mobile/OnTheGo";
import StayOnDiet from "../../Pages/Mobile/StayOnDiet";
import TryOut from "../../Pages/Mobile/TryOut";
import Footer from "../../Pages/Mobile/Footer";
import { useEffect } from "react";

function Mobile({ query }) {
  // const queryUrl = useQueryString();

  useEffect(() => {
    // navigate({
    //   pathname: "/m",
    //   search: `?${createSearchParams({ cover: queryUrl })}`,
    // });
  }, []);

  return (
    <div className="Mobile">
      <Cover query={query} />
      <Welcome />
      <Start />
      <OnTheGo />
      <StayOnDiet />
      <TryOut />
      <Footer />
    </div>
  );
}

export default Mobile;
