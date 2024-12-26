import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Sidebar } from "@/components/Sidebar";
import { Toaster } from "react-hot-toast";
import Provider from "@/components/Provider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin - Philippine Public Service Leadership Awards",
  description:
    "Philippine Public Service Leadership Awards is honor individuals who make outstanding contributions and whos accomplished are models of exemplary public service for those dedicated to the public good-now and in the future.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Toaster />
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 overflow-auto">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
