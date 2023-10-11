const mapping: Record<string, string> = {
  cars: 'car',
  'car-insurances': 'car_insurance',
  'car-maintenance-histories': 'car_maintenance_history',
  'car-models': 'car_model',
  'customer-feedbacks': 'customer_feedback',
  dealerships: 'dealership',
  'promotion-campaigns': 'promotion_campaign',
  purchases: 'purchase',
  'sales-managers': 'sales_manager',
  'sales-representatives': 'sales_representative',
  'sales-targets': 'sales_target',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
