import { PurchaseInterface } from 'interfaces/purchase';
import { DealershipInterface } from 'interfaces/dealership';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  color: string;
  dealership_id: string;
  created_at?: any;
  updated_at?: any;
  purchase?: PurchaseInterface[];
  dealership?: DealershipInterface;
  _count?: {
    purchase?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  dealership_id?: string;
}
