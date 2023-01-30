import { useEffect } from "react";
import { setCover } from "../Redux/cover/slicer";
import { useDispatch } from "react-redux";

const useRedirect = () => {
  const querystring = new URLSearchParams(document.location.search);
  const q = querystring.get("cover");
  const dispatch = useDispatch();
  if (q !== null) {
    if (q === "Rdn" || q === "Calories" || q === "Beauty") {
      // dispatch(setCover(q));
    } else {
      return;
    }
  }
};

export default useRedirect;
