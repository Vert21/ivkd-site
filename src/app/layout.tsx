import "./globals.css";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "ИНЖЕНЕР В КАЖДЫЙ ДОМ",
  description: "",
  openGraph: {
    url: "http://localhost:3000",
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
