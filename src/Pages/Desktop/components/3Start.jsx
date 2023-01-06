import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Start({ Layout, ChangePage, nextPath, PreviousPath }) {
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
    <section className="startPage" onWheel={WheelHandler}>
      {Layout}
    </section>
  );
}

export default Start;
