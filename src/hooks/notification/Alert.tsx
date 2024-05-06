import Swal from 'sweetalert2';

function useAlertHook(title:string) {
  const alertSuccess=()=>{
    Swal.fire({
      title: `${title}`,
      text: `Thành công!`,
      icon: 'success',
      timer: 1500

    });
  }
  return {alertSuccess}
}

export default useAlertHook
