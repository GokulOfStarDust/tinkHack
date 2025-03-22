import { checkCredentials } from "@/app/lib/db";
import { error } from "console";
import { NextRequest } from "next/server";

export default async function GET(req: NextRequest) {
    try{
        const formData = await req.formData();
        const name = formData.get('name') as string | null
        const password = formData.get('password') as string | null
        if (!name || !password) {
            return Response.json({error: 'Name and password are required'}, { status: 400 });
        }

        const exists = await checkCredentials(name, password); 

        return Response.json({
            exists,
            message : exists ? 'User exists' : 'User does not exist'
        });
    }
    catch (error: any) {
        console.error('Error in POST handler:', error);
        return Response.json({ error: error.message }, { status: 500 });
      }

}