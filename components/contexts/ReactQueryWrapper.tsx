import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface IReactQueryWrapperProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
export default function ReactQueryWrapper({
  children,
}: IReactQueryWrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
