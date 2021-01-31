import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestPaginationEntity {
  id?: string;
  stringAlice?: string | null;
  stringRequiredAlice?: string;
  stringMinlengthAlice?: string | null;
  stringMaxlengthAlice?: string | null;
  stringPatternAlice?: string | null;
  integerAlice?: number | null;
  integerRequiredAlice?: number;
  integerMinAlice?: number | null;
  integerMaxAlice?: number | null;
  longAlice?: number | null;
  longRequiredAlice?: number;
  longMinAlice?: number | null;
  longMaxAlice?: number | null;
  floatAlice?: number | null;
  floatRequiredAlice?: number;
  floatMinAlice?: number | null;
  floatMaxAlice?: number | null;
  doubleRequiredAlice?: number;
  doubleMinAlice?: number | null;
  doubleMaxAlice?: number | null;
  bigDecimalRequiredAlice?: number;
  bigDecimalMinAlice?: number | null;
  bigDecimalMaxAlice?: number | null;
  localDateAlice?: string | null;
  localDateRequiredAlice?: string;
  instantAlice?: string | null;
  instanteRequiredAlice?: string;
  zonedDateTimeAlice?: string | null;
  zonedDateTimeRequiredAlice?: string;
  durationAlice?: string | null;
  durationRequiredAlice?: string;
  booleanAlice?: boolean | null;
  booleanRequiredAlice?: boolean;
  enumAlice?: EnumFieldClass | null;
  enumRequiredAlice?: EnumRequiredFieldClass;
  uuidAlice?: string | null;
  uuidRequiredAlice?: string;
  byteImageAliceContentType?: string | null;
  byteImageAlice?: string | null;
  byteImageRequiredAliceContentType?: string;
  byteImageRequiredAlice?: string;
  byteImageMinbytesAliceContentType?: string | null;
  byteImageMinbytesAlice?: string | null;
  byteImageMaxbytesAliceContentType?: string | null;
  byteImageMaxbytesAlice?: string | null;
  byteAnyAliceContentType?: string | null;
  byteAnyAlice?: string | null;
  byteAnyRequiredAliceContentType?: string;
  byteAnyRequiredAlice?: string;
  byteAnyMinbytesAliceContentType?: string | null;
  byteAnyMinbytesAlice?: string | null;
  byteAnyMaxbytesAliceContentType?: string | null;
  byteAnyMaxbytesAlice?: string | null;
  byteTextAlice?: string | null;
  byteTextRequiredAlice?: string;
}

export const defaultValue: Readonly<IFieldTestPaginationEntity> = {
  booleanAlice: false,
  booleanRequiredAlice: false,
};
