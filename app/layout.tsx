import Header from "@/component/Header";
import "./globals.css";
import { Footer } from "@/component/Footer";

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

         <div className=" w-full mb-4">
          <Footer />
        </div>
      </body>
    </html>
  );
}
