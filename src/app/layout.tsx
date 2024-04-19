import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { ColorThemeProvider } from "@/hooks/use-color-theme";
import { Theme } from "@radix-ui/themes";
import { cookies } from "next/headers";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rajeev Rajchal",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore?.get("theme");

  return (
    <html lang="en">
      <body className={open_sans.className}>
        <ColorThemeProvider>
          <Theme
            grayColor="gray"
            panelBackground="solid"
            scaling="100%"
            appearance={theme as any}
          >
            {children}
          </Theme>
        </ColorThemeProvider>
      </body>
    </html>
  );
}
