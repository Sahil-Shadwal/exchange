import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@/app/db";
import { Keypair } from "@solana/web3.js";
import { authConfig } from "@/app/lib/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };

console.log({
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
});

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID ?? "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
//     }),
//   ],
//   callbacks: {
//     // @ts-ignore
//     async signIn({ user, account, profile, email, credentials }) {
//       if (account?.provider === "google") {
//         const email = user.email;
//         if (!email) {
//           return false;
//         }

//         console.log({ user, account, profile, email, credentials });
//         const userDb = await db.user.findFirst({
//           where: {
//             username: email,
//           },
//         });

//         if (userDb) {
//           return true;
//         }
//         const keypair = Keypair.generate();
//         const publicKey = keypair.publicKey.toBase58();
//         const privateKey = keypair.secretKey;

//         await db.user.create({
//           data: {
//             username: email,
//             name: profile?.name,
//             // @ts-ignore
//             profilePicture: profile?.picture,
//             provider: "Google",
//             solWallet: {
//               create: {
//                 publicKey: publicKey,
//                 privateKey: privateKey.toString(),
//               },
//             },
//             InrWallet: {
//               create: {
//                 balance: 0,
//               },
//             },
//           },
//         });
//         return true;
//       }
//     },
//   },
// });
