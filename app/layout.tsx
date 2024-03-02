import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description: "Unleash Your Productivity Potential.",
  icons:[
    {
      media:"(prefers-color-scheme:light)",
      url:"/logo.png",
      href:"/logo.png",
    },
    {
      media:"(prefers-color-scheme:dark)",
      url:"/logo-dark1.png",
      href:"/logo-dark1.png",
    }
  ]
};

export default function RootLayout({
  children,
}:{
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
  storageKey="NC-theme">
  {children}
  </ThemeProvider>
  </ConvexClientProvider>
      

        
        
        </body>
    </html>
  );
}
