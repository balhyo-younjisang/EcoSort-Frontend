import { GlobalStyles } from "@app/GlobalStyles";
import { theme } from "@app/theme";
import { HomePage } from "@pages/home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomNavigation } from "@widgets/index";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export const Provider = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
        <BottomNavigation />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};
