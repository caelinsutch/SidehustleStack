import { NextApiRequest, NextApiResponse } from 'next';

const Index = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ status: 'Welcome to the Sidehustle Stack API' });
};

export default Index;
