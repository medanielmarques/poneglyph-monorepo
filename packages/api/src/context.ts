import { getServerSession, type Session } from '@poneglyph/auth'
import { prisma } from '@poneglyph/db'
import { type inferAsyncReturnType } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'

type CreateContextOptions = {
  session: Session | null
}

export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  }
}

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getServerSession(opts)

  return await createContextInner({
    session,
  })
}

export type Context = inferAsyncReturnType<typeof createContext>
