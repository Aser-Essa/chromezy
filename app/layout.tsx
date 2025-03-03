import Footer from "./_components/Footer";
import Header from "./_components/Header";
import ScrollBallImage from "./_components/ScrollBallImage";
import ScrollTriangleImage from "./_components/ScrollTriangleImage";
import ScrollWhiteBall from "./_components/ScrollWhiteBall";
import "./_styles/globals.css";
import { Sora, Inter } from "next/font/google";

const SoraFont = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--SoraFont",
});

const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--InterFont",
});

export const metadata = {
  title: "Chromezy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`h-full overflow-x-hidden bg-[#151A2C] bg-[url(/background.png)] bg-contain font-sora text-white ${SoraFont.variable} ${InterFont.variable} antialiased`}
        id="Home"
      >
        <Header />
        <ScrollBallImage />
        <ScrollTriangleImage />
        <ScrollWhiteBall />
        {children}
        <Footer />
      </body>
    </html>
  );
}
