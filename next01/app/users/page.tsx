import exp from "constants";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";

export const metadata: Metadata = {
    title : 'Users'
}

export default async function UsersPage () {

    const usesData : Promise<User[]> = getAllUsers()

    return(
        <div>
            page 
        </div>
    )
}