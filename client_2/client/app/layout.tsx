import ClientProviders from "@/providers/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <AppRouterCacheProvider>
              <ThemeProvider theme={{}}>
                  <CssBaseline/>
                  <ClientProviders>
                      {children}
                  </ClientProviders>
              </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
  );
}
