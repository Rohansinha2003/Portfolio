import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Sinha | Machine Learning Engineer & AI Developer",
  description: "Portfolio of Rohan Sinha, a B.Tech Computer Science graduate specializing in Machine Learning, Artificial Intelligence, and scalable web engineering.",
  keywords: [
    "Rohan Sinha", 
    "Machine Learning Engineer", 
    "AI Developer", 
    "Software Engineer", 
    "Portfolio", 
    "Bengaluru", 
    "React", 
    "Next.js", 
    "Three.js"
  ],
  authors: [{ name: "Rohan Sinha" }],
  creator: "Rohan Sinha",
  metadataBase: new URL("https://rohansinha.dev"),
  openGraph: {
    title: "Rohan Sinha | Machine Learning Engineer & AI Developer",
    description: "I build intelligent applications powered by Machine Learning, AI, and scalable web technologies.",
    url: "https://rohansinha.dev",
    siteName: "Rohan Sinha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Sinha | Machine Learning Engineer & AI Developer",
    description: "I build intelligent applications powered by Machine Learning, AI, and scalable web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} dark scroll-smooth`}
    >
      <body className="font-sans antialiased text-foreground bg-background selection:bg-accent-teal/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
