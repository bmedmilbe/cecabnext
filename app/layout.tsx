import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import "swiper/css/bundle";

import "./styles/fontawesome.min.css";
import "./styles/animate.min.css";
import "./styles/flaticon.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/index.css";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "CECAB STP | Cacau Biológico de São Tomé e Príncipe",
  description:
    "Cooperativa de produtores e exportadores de Cacau Biológico de São Tomé e Príncipe (STP).",
  keywords: ["cecab", "cacau biologico", "sao tome e principe", "fair trade"],
  authors: [{ name: "CECAB STP" }],
  openGraph: {
    title: "Cacau Biológico de Qualidade Premium - CECAB STP",
    description:
      "Produzimos e exportamos cacau 100% biológico e de comércio justo.",
    url: "https://cecab.vercel.app",
    siteName: "CECAB STP",
    images: [
      {
        url: "https://bm-edmilbe-bucket.s3.amazonaws.com/cms/blog/post_images/imagem-2.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cacau Biológico de STP | CECAB",
    description: "Produção e exportação sustentável de cacau biológico.",
    images: [
      "https://bm-edmilbe-bucket.s3.amazonaws.com/cms/blog/post_images/imagem-2.jpg",
    ],
  },
  icons: {
    icon: "/images/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
