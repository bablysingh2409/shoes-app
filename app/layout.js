// import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "../components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
// import Provider from './components/Provider';

export const metadata = {
  title: "shoe-app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow mb-14">
            <Nav />
            <ChakraProvider>{children}</ChakraProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
