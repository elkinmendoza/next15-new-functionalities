export const metadata = {
  title: "About Us",
  description: "Learn more about us on this page.",
  keywords: ["about", "next.js", "app"],
  authors: [{ name: "John Doe", url: "https://example.com" }],
  openGraph: {
    title: "About Us",
    description: "Learn more about us on this page.",
    url: "https://example.com/about",
    siteName: "My Next.js App",
    images: [
      {
        url: "https://example.com/images/about.jpg",
        width: 800,
        height: 600,
        alt: "About Us Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description: "Learn more about us on this page.",
    images: ["https://example.com/images/about.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    manifest: "/site.webmanifest",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: { name: "custom-verification", value: "verification-code" },
    robots: {
      index: true,
      follow: true,
      noarchive: false,
      nosnippet: false,
      noimageindex: false,
    },
    alternates: {
      canonical: "https://example.com/about",
      languages: {
        en: "https://example.com/en/about",
        fr: "https://example.com/fr/about",
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "My Next.js App",
      startupImage: "/startup-image.png",
    },
    manifest: {
      name: "My Next.js App",
      short_name: "NextApp",
      start_url: "/about",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    appleTouchIcons: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "167x167",
        url: "/apple-touch-icon-167x167.png",
      },
    ],
  },
};

export default function About() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">About Us</h1>
      <p className="text-lg">This is the about page of our Next.js 15 app.</p>
    </main>
  );
}
