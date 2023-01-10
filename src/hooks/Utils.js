import { useNavigate, createSearchParams, useMatch } from "react-router-dom";

const useCheckWidth = (width) => {
  const navigate = useNavigate();
  const isMobileMatch = useMatch("/m");
  const params = { cover: "Rdn" };
  if (window.innerWidth < width && !isMobileMatch) {
    navigate({
      pathname: "/m",
      search: `?${createSearchParams(params)}`,
    });
    alert(params);

    // navigate("/m");
  }
  if (window.innerWidth >= width && isMobileMatch) {
    navigate({
      pathname: "/",
      search: `?${createSearchParams(params)}`,
    });
  }
};
const translate = (key, subKey, language) => {
  return language[key][subKey];
};

export { useCheckWidth, translate };
