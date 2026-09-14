import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChartMept — Data Visualisation & Analytics",
  description:
    "Turn raw data into beautiful, interactive charts. Real-time analytics for teams that move fast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
