import { toast, TypeOptions } from "react-toastify";

const useToast = (message: string, type: TypeOptions) => {
  return toast(message, {
    type: type,
    position: "bottom-right",
  });
};

export default useToast;
