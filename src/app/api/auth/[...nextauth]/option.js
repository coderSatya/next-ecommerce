import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { CredentialsProvider } from "next-auth/providers";

export const options = ()=>{
    providers:[
        GithubProvider({
            clientId,
            clientSecret
        })
    ]
}
