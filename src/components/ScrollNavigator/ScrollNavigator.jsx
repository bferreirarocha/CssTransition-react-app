import { useState } from "react";
import "./ScrollNavigator.scss";
import ScrollButton from "../ScrollButton/ScrollButton";

function ScrollNavigator({ index, color }) {
  const [eleements, setfirst] = useState(new Array(5));
  //   const SelectNavigator = () => {
  //     const children = document.getElementById("circles").children;
  //     console.log(children); // 👉️ [div.child1, div.child2, div.child3]

  //     const firstChild = children.item(index);
  //     console.log(firstChild); // 👉️ div.child1 abs absin abs

  // const elemts = Array.from({ length: 3 }).map(() => 0);
  //   };
  return (
    <div className="navigation">
      <ul className="circles">
        {[...Array(7).keys()].map((v, i) => (
          <li
            key={i}
            className={`circle   ${index === i ? "chosen" : ""}`}
            style={{ backgroundColor: ` ${index === i ? color : ""} ` }}
          ></li>
        ))}

        {/* <div
              key={key}
              className={`circle   ${index === key ? "chosen" : ""}`}
              //   style={{ backgroundColor: { color } }}
            >
              {key}
            </div>; */}
      </ul>
      <ScrollButton />
    </div>
  );
}

export default ScrollNavigator;
