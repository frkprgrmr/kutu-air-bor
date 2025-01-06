import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/navbar";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kutu Air Bor",
  description:
    "Layanan pengeboran sumur dan pemasangan water heater terbaik di Jabodetabek",
  keywords:
    "Kutu Air Bor,pengeboran sumur, Pemasangan water heater, Jabodetabek, bor sumur parung",
  openGraph: {
    title: "Kutu Air Bor",
    description: "Layanan pengeboran sumur terbaik di Jabodetabek",
    siteName: "Kutu Air Bor",
    locale: "id_ID",
    type: "website",
  },
  verification: {
    google: "ah_yD5lf-E6ARJSOxByLY_vHijjtDNau4SN6j53AYtQ",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn(roboto.className, "flex min-h-svh flex-col")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
