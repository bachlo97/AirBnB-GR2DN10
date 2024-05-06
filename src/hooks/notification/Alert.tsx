import React from 'react'
import Swal from 'sweetalert2';

function useAlertHook(title:string) {
  const alertSuccess=()=>{
    Swal.fire({
      title: 'Chào mừng!',
      text: `Xin chào ${title}!`,
      icon: 'success',
      timer: 1500

    });
  }
  return {alertSuccess}
}

export default useAlertHook
