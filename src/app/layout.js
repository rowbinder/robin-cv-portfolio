import "./globals.css";
import ChatbotWidget from "@/components/ChatbotWidget"; // Import here

export const metadata = {
  title: "Robin Singh | BI Consultant & AI Strategist",
  description: "Senior BI Consultant with 20+ years experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f3f2ef] min-h-screen">
        {children}
        <ChatbotWidget /> {/* Add it here so it shows on every page */}
      </body>
    </html>
  );
}

