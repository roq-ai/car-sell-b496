import { GetQueryInterface } from 'interfaces';

export interface CarMaintenanceHistoryInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarMaintenanceHistoryGetQueryInterface extends GetQueryInterface {
  id?: string;
}
