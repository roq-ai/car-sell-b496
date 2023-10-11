import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { DealershipInterface } from 'interfaces/dealership';
import { GetQueryInterface } from 'interfaces';

export interface PurchaseInterface {
  id?: string;
  purchase_date?: any;
  price_paid: number;
  user_id: string;
  car_id: string;
  dealership_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  dealership?: DealershipInterface;
  _count?: {};
}

export interface PurchaseGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  dealership_id?: string;
}
