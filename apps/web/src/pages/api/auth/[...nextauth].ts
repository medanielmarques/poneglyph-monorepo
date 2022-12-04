import { authOptions } from '@poneglyph/auth'
import NextAuth from 'next-auth'

console.log(process.env.NEXTAUTH_SECRET)

export default NextAuth(authOptions)
