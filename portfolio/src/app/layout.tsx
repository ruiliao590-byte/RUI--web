import type { Metadata } from "next";
import { Noto_Serif_SC, Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageWrapper from "@/components/page-wrapper";

const notoSerifSc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif-sc",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "瑞阿瑞 - Personal Portfolio",
  description: "产品经理, 独立开发者, 博主",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${notoSerifSc.variable} ${cinzelDecorative.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="book"
          enableSystem
          disableTransitionOnChange
        >
          <PageWrapper>{children}</PageWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
