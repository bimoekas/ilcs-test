import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INSW",
  description: "Quality Control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.className
        )}
      >
        <div className="bg-primary flex flex-row justify-between items-center px-8 py-2">
          <Image
            src="https://picsum.photos/50"
            alt="Logo"
            width={40}
            height={10}
          />
          <Label className="text-white text-base font-medium">
            {format(new Date(), "EEEE, dd MMMM yyyy", { locale: id })}
          </Label>
        </div>

        <div className="flex flex-row justify-between items-center px-8 py-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>SSM QC</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link
            href="/"
            className="hover:cursor-pointer flex flex-row items-center text-primary"
          >
            <ChevronLeft className="text-primary mr-1" />
            Beranda Permohonan
          </Link>
        </div>

        <div className="bg-gray-300 p-7 flex-grow">{children}</div>
      </body>
    </html>
  );
}
