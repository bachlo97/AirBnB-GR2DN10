import LoadRoomItem from "./LoadRoomItem"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function LoadListRoom(props: { data: any  [] }) {
  
    return (
    <div className='flex gap-[1%] flex-wrap'>
    {props.data.map(()=>{
        return <LoadRoomItem 
    />
    })}
    
    </div>
  )
}
export default LoadListRoom
