import { useCookies } from "react-cookie";

const useAuth = () => {
  const [{ token }] = useCookies(["token"]);
  return !!token;
};

export default useAuth;
