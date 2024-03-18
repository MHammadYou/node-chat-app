import useUser from "./useUser";

const useIsAuthor = (authorUsername?: string) => {
  const { username } = useUser();
  return {
    isAuthor: username === authorUsername,
    isAuthorFn: (authorUsername?: string) => username === authorUsername,
  };
};

export default useIsAuthor;
