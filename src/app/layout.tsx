import type { Metadata } from "next";
import { Header } from "@/components/Shared/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyDictionary",
  description: "Discover the meaning of words with our online dictionary. Find definitions, synonyms, examples, and more to expand your vocabulary and knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[640px] m-auto px-5">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
