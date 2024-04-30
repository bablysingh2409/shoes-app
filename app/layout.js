import { Inter } from "next/font/google";
import Nav from "./components/Nav";
// import Provider from './components/Provider';

export const metadata = {
  title: "shoe-app",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
