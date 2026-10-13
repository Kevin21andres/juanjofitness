import {redirect} from "next/navigation";
import {isAdmin} from "@/lib/admin-auth";
import LoginForm from "./LoginForm";
export const metadata={title:"Acceso administración",robots:{index:false,follow:false}};
export default async function LoginPage(){if(await isAdmin())redirect("/admin");return <LoginForm/>;}
