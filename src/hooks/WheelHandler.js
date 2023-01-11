const usePageWheelhandler = (
  index,
  ChangePage,
  nextPath,
  PreviousPath = "/"
) => {
  if (index > 0) {
    try {
      setTimeout(() => {
        ChangePage({ pathname: nextPath });
      }, 700);
    } catch (error) {
      console.log(error);
    }
  } else if (index < 0) {
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
