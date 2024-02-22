import useCookie from "./useCookie";

const useAuth = (): boolean => {
  const { cookie } = useCookie("token");
  return !!cookie;
};

export default useAuth;
