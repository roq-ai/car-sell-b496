interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: [
    'Business Owner',
    'Sales Manager',
    'Sales Representative',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Dealership',
  applicationName: 'car sell',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read car models',
    'Read promotion campaigns',
    'Create customer feedback',
    'Read purchase history',
  ],
  ownerAbilities: [
    'Manage car models',
    'Manage promotion campaigns',
    'Manage customer feedback',
    'Manage sales targets',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/c67aab4c-c177-4979-a9cf-021f3eae651c',
};
