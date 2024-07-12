import type { Metadata } from "next";
import { Header } from "@/components/Shared/Header";
import StoreProvider from "./StoreProvider";
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
      <body className="bg-white dark:bg-zinc-950">
        <div className="max-w-[640px] m-auto px-5">
          <StoreProvider>
            <Header />
            {children}
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
