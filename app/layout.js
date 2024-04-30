// import { Inter } from "next/font/google";

import './globals.css';
import Nav from "../components/Nav";
import { ChakraProvider } from '@chakra-ui/react'
// import Provider from './components/Provider';

export const metadata = {
  title: "shoe-app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        <div className="w-full">
          <Nav />
          <ChakraProvider>
          {children}
          </ChakraProvider>
        </div>
       
      </body>
    </html>
  );
}

export default RootLayout;
