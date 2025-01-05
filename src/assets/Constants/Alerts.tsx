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