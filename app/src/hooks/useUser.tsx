import { useAppSelector } from "store/hooks";
import { selectUserDetails } from "store/api/selectors/accounts";

const useUser = () => {
  const { username, email } = useAppSelector(selectUserDetails);
  return { username, email };
};

export default useUser;
