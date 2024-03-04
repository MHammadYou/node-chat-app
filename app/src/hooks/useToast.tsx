import { toast } from "react-toastify";

export enum ToastType {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
  DEFAULT = "default",
}

const useToast = (message: string, type: ToastType) => {
  return toast(message, {
    type: type,
    position: "top-right",
  });
};

export default useToast;
