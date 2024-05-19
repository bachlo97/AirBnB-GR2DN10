import Swal from 'sweetalert2';

function useAlertHook() {
  const alertSuccess=(title:string)=>{
    Swal.fire({
      position: "top-end",
      title: `${title}`,
      text: `Thành công!`,
      
      showConfirmButton: false,

      timer: 1500,
      timerProgressBar: true,


    });
  }
  const alertError=(text:string)=>{
    Swal.fire({
 
      position: "top-end",
      title: "Thất bại",
      text: `${text}`,
      showConfirmButton: false,
      timer: 1500,
      background:'red',
      color:'white'
    });
  }
  return {alertSuccess,alertError}
}

export default useAlertHook
