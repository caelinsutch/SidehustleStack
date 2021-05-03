import { ProfitModel } from '@GraphQL/types';

const generateProfitModelDescription = (
  profitModel: ProfitModel,
  description: string
): string | undefined => {
  if (profitModel === ProfitModel.PercentageTakeRate) {
    return `${description}%`;
  }
  if (profitModel === ProfitModel.SubscriptionFee) {
    return `$${profitModel} per month`;
  }
  return undefined;
};

export { generateProfitModelDescription };
