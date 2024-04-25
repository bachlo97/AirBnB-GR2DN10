
import './skeletion.css'
type Props={
  height:number,
  width:number,
  borderRadius:number,
}
function LoadingSkeletonHeader(props:Props) {
  return (
    <div
      className="skeleton"
      style={{
        height: props.height,
        width: props.width || '100%',
        borderRadius: props.borderRadius,
      }}
    ></div>
  );
}

export default LoadingSkeletonHeader;
