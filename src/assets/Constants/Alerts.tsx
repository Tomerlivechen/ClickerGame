import Swal from "sweetalert2";

export const ConfirmRestart = async () =>
    Swal.fire({
      title: "Are you sure you want to restart the game?",
      icon: "question",
      showCancelButton: true,
      heightAuto: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        return true;
      }
    });

    export const showToast=(message:string) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
    
      Toast.fire({
        icon: "success", 
        title: message,
      });
    }