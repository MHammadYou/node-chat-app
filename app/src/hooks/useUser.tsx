import useCookie from "hooks/useCookie";

const useUser = () => {
  const { cookie: username } = useCookie("username");
  return username as string | undefined;
};

export default useUser;
