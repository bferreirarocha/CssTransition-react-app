import { useEffect } from "react";
import { setCover, selectCover } from "../Redux/cover/slicer";
import { useSelector, useDispatch } from "react-redux";

const useRedirect = () => {
  const dispatch = useDispatch();
  const cover = useSelector(selectCover);

  useEffect(() => {
    const querystring = new URLSearchParams(document.location.search);
    const q = querystring.get("cover");

    if (q !== null) {
      if (q === "Rdn" || q === "Calories" || q === "Beauty") {
        console.log("useRedirect, query : " + q);
        dispatch(setCover(q));
      } else {
        console.log("useRedirect, query : " + q);
        console.log("useRedirect, selectCover : " + cover);
        return;
      }
    }
  }, []);
};

export default useRedirect;
