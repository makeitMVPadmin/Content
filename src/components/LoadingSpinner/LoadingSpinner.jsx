import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="grey"
      strokeColor={"#0954b0"}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export default LoadingSpinner;
