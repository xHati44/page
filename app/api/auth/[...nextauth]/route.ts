import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: "654970112202-sg3fd06q9vscdkpi29tl42ekki64ma70.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
