import { GetQueryInterface } from 'interfaces';

export interface SalesTargetInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SalesTargetGetQueryInterface extends GetQueryInterface {
  id?: string;
}
