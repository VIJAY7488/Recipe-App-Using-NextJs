import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe App",
  description: "Welcome to Recipe App, the ultimate recipe companion that brings culinary creativity to your fingertips. Whether you're a seasoned chef or just starting in the kitchen, our app is designed to make cooking easy, enjoyable, and accessible. Discover a vast collection of delicious recipes from around the world, tailored to suit all tastes and dietary preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
