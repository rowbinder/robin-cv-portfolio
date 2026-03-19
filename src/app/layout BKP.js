import "./globals.css";

export const metadata = {
  title: 'Robin Singh | Senior Technical BI Analyst & Consultant',
  description: 'Business Intelligence Strategist | Data Migration & Integration Lead | 20+ Years Experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
