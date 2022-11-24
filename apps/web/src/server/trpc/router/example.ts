import { z } from 'zod'

import { router, publicProcedure } from '../trpc'

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return [1, 2]
    // return ctx.prisma.example.findMany();
  }),
})