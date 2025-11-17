import React, {  useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import DeleteModal from "@/components/modals/DeleteModal";
import JobModal from "@/components/modals/JobModal";
import { useRouter } from "next/router";
import BlogModal from "@/components/modals/BlogModal";
import SlideModal from "@/components/modals/SlideModal";

function AdminLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // verifying the jwt token , and redirecting to login page if not present
    let token = document.cookie;
    if (token)
      token = token.split("; ").find((row) => row.startsWith("token="));
    if (!token) router.push("/admin");
    else setLoginStatus(true);
  }, [router]);
  return (
    loginStatus && (
      <>
        {/* <Loader /> */}
        <DeleteModal />
        <BlogModal />
        <SlideModal />
        <JobModal />
        <AdminNavbar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        {showSidebar && <AdminSidebar showSidebar={showSidebar} />}
        <main>{children}</main>
      </>
    )
  );
}

export default AdminLayout;
