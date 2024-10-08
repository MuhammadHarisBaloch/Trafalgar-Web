// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import Logo from "@/constants/Logo";

const theme = createTheme({
  fontFamily: "Mulish",
  fontFamilyMonospace: "Mulish",
  headings: { fontFamily: "Mulish" },
});

export const metadata = {
  title: "Trafalgar",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Logo.AppLogo} type="image/app-icon" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
