import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TryNow({ ChangePage, nextPath, PreviousPath }) {
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      try {
        setTimeout(() => {
          ChangePage({ pathname: nextPath, event: e });
        }, 700);
      } catch (error) {
        console.log(error);
      }
    } else if (e.deltaY < 0) {
      try {
        setTimeout(() => {
          ChangePage({ pathname: PreviousPath });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <section className="tryNowPage" onWheel={WheelHandler}>
      TryNow
    </section>
  );
}

export default TryNow;
