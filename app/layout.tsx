import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vamsi Andavarapu — AI / ML Engineer & Data Scientist",
  description:
    "B.Tech CSE (Data Science) engineer specializing in local RAG pipelines, NLP & LLMs, machine learning model development, and data science solutions.",
  openGraph: {
    title: "Vamsi Andavarapu — AI / ML Engineer",
    description:
      "B.Tech CSE (Data Science) undergraduate building local RAG pipelines, machine learning models, and NLP solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
