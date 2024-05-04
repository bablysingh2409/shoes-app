// import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "../components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
// import Provider from './components/Provider';
import { UriProvider } from "@/context/uriContext";
import { AuthProvider } from "@/context/Auth";
import NavHeader from "@/components/NavHeader";

export const metadata = {
  title: "shoe-app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UriProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <div className="flex-grow mb-14">
                <Nav />
                
                <NavHeader/>
                
                {children}
              </div>
              {/* <Footer /> */}
            </div>
          </AuthProvider>
        </UriProvider>
      </body>
    </html>
  );
}

export default RootLayout;
