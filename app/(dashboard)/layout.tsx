import type { Metadata } from "next";
import TopbarNav from "../topBar-Nav/components/TopbarNav";
import SideBarContainer from "../sideBar-Menu/components/SideBarContainer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <TopbarNav />
          <div className="flex items-start ">
            <SideBarContainer />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
