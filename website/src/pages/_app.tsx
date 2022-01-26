import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { globalStyles } from "@/components/global-style";
import { QueryClient, QueryClientProvider } from "react-query";
import { MainLayout } from "@/components/layout-main";
import { BasketProvider } from "@/components/basket";
import { locale } from "@/config/locale";

const queryClient = new QueryClient();

export const MyApp = (props: AppProps) => {
  globalStyles();

  return (
    <>
      
      <QueryClientProvider client={queryClient}>
        <BasketProvider locale={locale}>
          <MainLayout {...props} />
        </BasketProvider>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
