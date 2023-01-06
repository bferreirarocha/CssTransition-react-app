import { React } from "react";

function Cover({ ChangePage, nextPath }) {
  const WheelHandler = (e) => {
    if (e.deltaY > 0) {
      try {
        setTimeout(() => {
          ChangePage({ pathname: nextPath });
        }, 700);
      } catch (error) {
        console.log(error);
      }
      return;
    } else {
    }
  };

  return (
    <section className="coverPage" onWheel={WheelHandler}>
      Desktop
    </section>
  );
}

export default Cover;
