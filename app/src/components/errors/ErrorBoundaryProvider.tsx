import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./ErrorFallback";

type Props = {
  children: React.ReactNode;
};

const ErrorBoundaryProvider: React.FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default ErrorBoundaryProvider;
