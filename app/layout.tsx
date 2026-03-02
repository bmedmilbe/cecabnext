import "bootstrap/dist/css/bootstrap.css";
// import "../styles/bootstrap.min.css";
import "./styles/fontawesome.min.css";
import "./styles/animate.min.css";
import "./styles/flaticon.css";
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/index.css";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
