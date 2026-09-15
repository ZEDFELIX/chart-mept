import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChartMept — Analytics, visualised.",
  description:
    "Turn raw data into living dashboards. Connect any source, drag in a chart, and ship interactive analytics in minutes.",
  other: {
    "theme-color": "#070b14",
  },
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
