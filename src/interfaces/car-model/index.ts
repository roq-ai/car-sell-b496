import { GetQueryInterface } from 'interfaces';

export interface CarModelInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CarModelGetQueryInterface extends GetQueryInterface {
  id?: string;
}
