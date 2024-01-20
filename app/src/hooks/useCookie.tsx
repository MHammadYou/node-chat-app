import { useCookies } from "react-cookie";

const useCookie = (cookie: string) => {
  const [cookies, setCookie, removeCookie] = useCookies([cookie]);

  return {
    cookie: cookies[cookie],
    setCookie: (value: string | undefined) => setCookie(cookie, value),
    removeCookie: () => removeCookie(cookie),
  };
};

export default useCookie;
