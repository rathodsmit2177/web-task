import Header from "@/component/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="fixed w-full mb-4">
          <Header />
        </div>

        {children}
      </body>
    </html>
  );
}
