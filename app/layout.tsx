import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio of Sakshi Sharma",
  description: "Portfolio of Sakshi Sharma, a New York-based full-stack engineer building resilient systems and intelligent digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
