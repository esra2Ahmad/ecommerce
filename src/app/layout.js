import { Inter } from "next/font/google";
import "./globals.css";
import { ShopContextProvider } from "@/context/shop-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "hekto",
  description: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ShopContextProvider>
        {children}
        </ShopContextProvider>

        </body>
    </html>
  )
}
