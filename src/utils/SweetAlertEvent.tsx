import Swal from "sweetalert2";

export const successMessage = (message: string): void => {
  Swal.fire({
    title: "알림",
    icon:'success',
    html: message,
    showCancelButton: false,
    confirmButtonText: "확인",
  }).then(() => {});
}

export const errorMessage = (message: string): void => {
    Swal.fire({
      title: "에러",
      icon:'error',
      html: message,
      showCancelButton: false,
      confirmButtonText: "확인",
    }).then(() => {});
}