import { protectedProcedure, publicProcedure, router } from '../trpc'

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => ctx.session),

  getSecretMessage: protectedProcedure.query(
    () => 'you can see the protected message'
  ),
})
