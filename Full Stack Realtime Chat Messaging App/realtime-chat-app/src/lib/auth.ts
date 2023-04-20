import { NextAuthOptions } from "next-auth"
import  {UpstashRedisAdapter} from '@next-auth/upstash-redis-adapter';
import GoogleProvider from 'next-auth/providers/google'

export const authOptions : NextAuthOptions = {
    adapter : UpstashRedisAdapter(db),
    session:{
        strategy :'jwt'
    },
    pages : {
        signIn : '/login'
    },
    providers : {
        GoogleProvider({
            clientId:
        })

    }
}