import { GetQueryInterface } from 'interfaces';

export interface CarInsuranceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarInsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
