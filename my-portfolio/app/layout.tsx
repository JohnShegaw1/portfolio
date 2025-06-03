import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Corrected path
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar"; // We'll create this next
import Footer from "@/components/Footer"; // We'll create this

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Modern Portfolio",
  description: "A showcase of my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pt-20 sm:pt-28 md:pt-32"> {/* Add padding to avoid overlap with fixed navbar */}
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}