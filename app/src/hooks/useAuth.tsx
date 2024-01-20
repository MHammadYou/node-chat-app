import useCookie from "./useCookie";

const useAuth = () => {
  const { cookie } = useCookie("token");
  return !!cookie;
};

export default useAuth;
