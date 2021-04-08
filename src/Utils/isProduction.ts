const isProduction =
  process.env.VERCEL !== undefined || process.env.NODE_ENV === 'production';

export default isProduction;
