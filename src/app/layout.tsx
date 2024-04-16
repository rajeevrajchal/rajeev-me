import AppFooter from "@/components/footer";
import Appbar from "@/components/header/appbar";
import { Box, Container, Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajeev Rajchal",
  description: "I am Rajeev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Container
            size="4"
            className="p-4 w-screen min-h-screen"
            position="relative"
          >
            <Flex direction="column" justify="between" gapY="6">
              <Appbar />
              <Box height="100%" width="100%">
                {children}
              </Box>
              <AppFooter />
            </Flex>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
