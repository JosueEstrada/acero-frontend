import "@/app/globals.css";
import { Inter } from "next/font/google";

import SideNavbar from "@/components/dashboard/SideNavbar";

import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex min-h-screen w-full bg-[#f2f2f2] text-black ",
          inter.className,
        )}
      >
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
        <SideNavbar />
        {/* main page */}
        <div className="w-full p-8">{children}</div>
      </body>
    </html>
  );
}
