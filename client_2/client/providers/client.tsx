'use client';
import { Notistack } from "@/components/Notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ClientProviders = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Notistack>
                {children}
            </Notistack>
        </QueryClientProvider>
    );
};

export default ClientProviders;
