const usePageWheelhandler = (e, ChangePage, nextPath, PreviousPath = "/") => {
  if (e.deltaY > 0) {
    try {
      setTimeout(() => {
        ChangePage({ pathname: nextPath });
      }, 700);
    } catch (error) {
      console.log(error);
    }
  } else if (e.deltaY < 0) {
    try {
      setTimeout(() => {
        ChangePage({
          pathname: PreviousPath,
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }
};
export default usePageWheelhandler;
