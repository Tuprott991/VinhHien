import NextAuth from "next-auth"

import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: 'demo',
            credentials: {},
            async authorize() {
                return {
                    id: "demo",
                    name: "Tài khoản Demo",
                    email: "demo@vinhdien.edu",
                    image: "/logo.png"
                }
            }
        }),
    ],
    callbacks: {
        session({ session, token }) {
            if(session.user) {
                session.user.id = token.sub || "";
            }
            return session;
        }
    }
})

export { handler as GET, handler as POST }