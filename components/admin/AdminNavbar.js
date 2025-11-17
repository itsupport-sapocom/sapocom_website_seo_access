import Image from "next/image";
import Link from "next/link";
import cross from "@/assets/images/icons/cross-menu.svg"
import menu from "@/assets/images/icons/menu.svg"
import logo from "@/assets/images/sapocom-admin-logo.png";
export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const crossMenuClass = "bg-black rounded-md p-2 rounded-sm cursor-pointer opacity-30 hover:opacity-100 transition-[opacity]";
    const menuClass = "bg-white"
  return (
    <header className="w-full px-4 py-4 sticky top-0 left-0 z-[90] shadow-md bg-white">
      <div className="flex w-full gap-4">
        <div
          className={`flex justify-center items-center`}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <Image
            src={showSidebar?cross:menu}
            alt="hamburger"
            width={35}
            height={35}
            className={`${showSidebar?crossMenuClass:menuClass}`}
          />
          
        </div>
        
        <Link href="/admin/dashboard" passHref className="flex justify-center items-center">
          <Image
            src={logo}
            width={70}
            className="h-auto w-auto"
            alt="header_logo"
          />
        </Link>
      </div>
    </header>
  );
}
