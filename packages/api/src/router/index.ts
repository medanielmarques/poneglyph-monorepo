import { publicProcedure, router } from '../trpc'
import { authRouter } from './auth'

export const appRouter = router({
  auth: authRouter,
  idk: publicProcedure.query(() => 'oi'),
})

export type AppRouter = typeof appRouter
