import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter"
import Google from "@auth/core/providers/google";
import { firebaseCert } from "@/app/lib/firebase";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [Google],
    adapter: FirestoreAdapter({
        credential: firebaseCert,
    }),
})


