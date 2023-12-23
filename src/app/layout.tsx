import "./globals.css";

export const metadata = {
  title: "ИНЖЕНЕР В КАЖДЫЙ ДОМ",
  description: "",
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
