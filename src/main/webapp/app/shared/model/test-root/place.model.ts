import { IDivision } from 'app/shared/model/test-root/division.model';

export interface IPlace {
  id?: string;
  name?: string;
  numberOfSeats?: number | null;
  shortName?: string | null;
  colorBackground?: string | null;
  colorText?: string | null;
  description?: string | null;
  preferredDivisions?: IDivision[] | null;
  owner?: IDivision | null;
}

export const defaultValue: Readonly<IPlace> = {};
