import "./globals.css";
import Favicon_16 from "../../public/favicon-16x16.png";
import Favicon_32 from "../../public/favicon-32x32.png";
import Favicon_Apple_Touch from "../../public/apple-touch-icon.png";

export const metadata = {
  metadataBase: new URL("https://engineer-v-dom.vercel.app"),
  title: "ИНЖЕНЕР В КАЖДЫЙ ДОМ",
  description: "",
  icons: [{
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    url: Favicon_16.src,
  }, {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    url: Favicon_32.src,
  }, {
    rel: "apple-touch-icon",
    sizes: "180x180",
    url: Favicon_Apple_Touch.src,
  }],
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
