import { IPlace } from 'app/shared/model/test-root/place.model';
import { DivisionType } from 'app/shared/model/enumerations/division-type.model';

export interface IDivision {
  id?: string;
  name?: string;
  shortName?: string | null;
  numberOfPeople?: number | null;
  divisionType?: DivisionType;
  colorBackground?: string | null;
  colorText?: string | null;
  divisionsPlaces?: IPlace[] | null;
  preferredPlaces?: IPlace[] | null;
}

export const defaultValue: Readonly<IDivision> = {};
