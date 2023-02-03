import { React } from "react";
import "./Mobile.scss";

import Cover from "../../Pages/Mobile/Cover";
import Welcome from "../../Pages/Mobile/Welcome";
import Start from "../../Pages/Mobile/Start";
import OnTheGo from "../../Pages/Mobile/OnTheGo";
import StayOnDiet from "../../Pages/Mobile/StayOnDiet";
import TryOut from "../../Pages/Mobile/TryOut";
import Footer from "../../Pages/Mobile/Footer";

function MobileBeauty({ query }) {
  // const queryUrl = useQueryString();

  return (
    <div className='Mobile'>
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

export default MobileBeauty;
