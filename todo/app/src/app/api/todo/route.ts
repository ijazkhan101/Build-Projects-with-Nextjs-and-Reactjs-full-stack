import {db} from "@vercel/postgres";
import { NextRequest , NextResponse} from "next/server"

export  function GET(request: NextRequest) {
  return  NextResponse.json({message:'Hello, Next.js!'})
}
