import Swal from 'sweetalert2';

function useAlertHook(title:string) {
  const alertSuccess=()=>{
    Swal.fire({
      position: "top-end",
      title: `${title}`,
      text: `Thành công!`,
      icon: 'success',
      showConfirmButton: false,

      timer: 1500,
      timerProgressBar: true,

    });
  }
  return {alertSuccess}
}

export default useAlertHook
