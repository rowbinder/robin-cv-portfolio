import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Robin Singh",
  description: "Robin Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-[-apple-system,system-ui,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue','Fira_Sans',Ubuntu,Oxygen,'Oxygen_Sans',Cantarell,sans-serif] bg-[#f3f2ef]">
        {children}
      </body>
    </html>
  );
}
