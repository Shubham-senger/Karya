import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karya",
  description: "The connected workspace where better faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/logo-light1.svg",
        href: "/logo-light1.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/logo-dark1.svg",
        href: "/logo-dark1.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="karya-theme-2"
          >
            <EdgeStoreProvider>
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </EdgeStoreProvider>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
