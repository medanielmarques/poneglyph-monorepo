import { type NextApiRequest, type NextApiResponse } from 'next'

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  // const examples = await prisma.example.findMany();
  res.status(200).json({ idk: 2 })
}

export default examples
