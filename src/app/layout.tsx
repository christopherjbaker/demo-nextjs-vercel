"use client"

// import type { Metadata } from "next"

import Layout from "#design/Layout"
import Theme from "#design/theme"

// export const metadata: Metadata = {
//   title: "Next.js on Vercel",
//   description: "Demo of Next.js on Vercel with Supabase Auth and Database",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Layout
            navigation={[
              { href: "/", label: "Home" },
              { href: "/private", label: "Private" },
            ]}
          >
            {children}
          </Layout>
        </Theme>
      </body>
    </html>
  )
}
