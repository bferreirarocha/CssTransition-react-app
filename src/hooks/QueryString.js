import React, { useState } from "react";

const useQueryString = () => {
  const [defaultQuery, setDefaultQuery] = useState("Rdn");
  const querystring = new URLSearchParams(document.location.search);
  const q = querystring.get("cover");
  if (q !== null) {
    return q;
  } else {
    return defaultQuery;
  }
};

export default useQueryString;
