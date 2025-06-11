import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "90s Leaderboard",
  description: "A retro-styled leaderboard application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen bg-[var(--retro-bg)]">
          <header className="py-6 px-4 border-b-2 border-[var(--retro-border)] bg-white">
            <div className="max-w-6xl mx-auto">
              <h1 className="retro-title text-center">Leaderboard</h1>
            </div>
          </header>
          <main className="max-w-6xl mx-auto py-8 px-4">
            <div className="retro-card">{children}</div>
          </main>
          <footer className="py-4 px-4 border-t-2 border-[var(--retro-border)] bg-white">
            <div className="max-w-6xl mx-auto text-center text-sm text-[var(--retro-text)]">
              © {new Date().getFullYear()} Leaderboard App
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
