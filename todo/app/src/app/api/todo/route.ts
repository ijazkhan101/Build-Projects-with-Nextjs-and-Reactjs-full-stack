import { QueryResult } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import {Todo ,NewTodo,db, todoTable} from "../../lib/drizzle"
import { sql } from "@vercel/postgres";
export async function GET(request: NextRequest) {
  const client = await db.connect();
  try {
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(255) );`;
    
    const res = await db.select().from(todoTable).execute()


    return    NextResponse.json({data:res })
  } catch (err) {
    console.log(err);
    return  NextResponse.json({message:"Something went wrong"});
  }
}

export async function POST(request: NextRequest){
  const client = await db.connect();
  const req = await request.json();
  try{
    if(req.task){
      const res = await sql`INSERT INTO Todos(Task) VALUES(${req.task})`
      return NextResponse.json({message:"Data Added Successfully"})
    }else{
      throw new Error("Task field is required")
    }
  } catch(error){
    return NextResponse.json({message:(error as{ message:string}).message});
  }
}
