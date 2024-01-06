import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://engineer-v-dom.vercel.app"),
  title: "ИНЖЕНЕР В КАЖДЫЙ ДОМ",
  description: "",
  openGraph: {
    url: "https://engineer-v-dom.vercel.app",
    title: "ИНЖЕНЕР В КАЖДЫЙ ДОМ",
    type: "website",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
