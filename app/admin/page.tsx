import {redirect} from "next/navigation";
import {isAdmin} from "@/lib/admin-auth";
import AdminDashboard from "./AdminDashboard";
export const metadata={title:"Panel del blog",robots:{index:false,follow:false}};
export const dynamic="force-dynamic";
export default async function AdminPage(){if(!(await isAdmin()))redirect("/admin/login");return <AdminDashboard/>;}
