import { Inter } from "next/font/google";
import "./globals.css";
import FloatingBottomNav from "@/components/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pakcast",
  description: "Discover trending pakistani podcasts!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          {children}
          <FloatingBottomNav />
        </div>
      </body>
    </html>
  );
}
