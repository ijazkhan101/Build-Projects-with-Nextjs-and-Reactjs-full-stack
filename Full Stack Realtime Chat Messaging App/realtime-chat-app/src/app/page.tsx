

import {db} from '@/lib/db'

export default async function Home() {

  await db.set('ijaz','ijaz')
  return (
   <div className="text-red-600">
    hello world
   </div>
  )
}
