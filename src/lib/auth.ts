import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Debugging logs
                if (!credentials?.email || !credentials?.password) {
                    console.log("Missing email or password");
                    return null;
                }

                const existingUser = await db.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!existingUser) {
                    console.log("User not found");
                    return null;
                }

                const passwordMatch = await compare(credentials.password, existingUser.password);

                if (!passwordMatch) {
                    console.log("Password mismatch");
                    return null;
                }

                console.log("Authentication successful");
                return {
                    id: `${existingUser.id}`,
                    email: existingUser.email,
                    image: existingUser.image,
                    name: existingUser.name,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                console.log("User JWT callback:", user);
                return {
                    ...token,
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    image: user.image,
                };
            }
            return token;
        },
        async session({ session, token }) {
            console.log("Session callback:", token);
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email,
                    name: token.name,
                    image: token.image,
                }
            };
        }
    }
};
