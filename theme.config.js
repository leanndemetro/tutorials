export default {
  github: 'https://github.com/leanndemetro',
  docsRepositoryBase: 'https://github.com/leanndemetro/tutorials',
  titleSuffix: ' Alyssa De Metro',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Alyssa De Metro</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Tutorials and more
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="og:title" content="Alyssa De Metro: Tutorials and more" />
      <meta name="og:image" content="/public/images/glitter.jpg" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'View this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Alyssa De Metro</>,
  unstable_faviconGlyph: '👋',
}
