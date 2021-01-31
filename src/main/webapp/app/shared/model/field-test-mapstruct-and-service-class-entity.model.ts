import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestMapstructAndServiceClassEntity {
  id?: string;
  stringEva?: string | null;
  stringRequiredEva?: string;
  stringMinlengthEva?: string | null;
  stringMaxlengthEva?: string | null;
  stringPatternEva?: string | null;
  integerEva?: number | null;
  integerRequiredEva?: number;
  integerMinEva?: number | null;
  integerMaxEva?: number | null;
  longEva?: number | null;
  longRequiredEva?: number;
  longMinEva?: number | null;
  longMaxEva?: number | null;
  floatEva?: number | null;
  floatRequiredEva?: number;
  floatMinEva?: number | null;
  floatMaxEva?: number | null;
  doubleRequiredEva?: number;
  doubleMinEva?: number | null;
  doubleMaxEva?: number | null;
  bigDecimalRequiredEva?: number;
  bigDecimalMinEva?: number | null;
  bigDecimalMaxEva?: number | null;
  localDateEva?: string | null;
  localDateRequiredEva?: string;
  instantEva?: string | null;
  instanteRequiredEva?: string;
  zonedDateTimeEva?: string | null;
  zonedDateTimeRequiredEva?: string;
  durationEva?: string | null;
  durationRequiredEva?: string;
  booleanEva?: boolean | null;
  booleanRequiredEva?: boolean;
  enumEva?: EnumFieldClass | null;
  enumRequiredEva?: EnumRequiredFieldClass;
  uuidEva?: string | null;
  uuidRequiredEva?: string;
  byteImageEvaContentType?: string | null;
  byteImageEva?: string | null;
  byteImageRequiredEvaContentType?: string;
  byteImageRequiredEva?: string;
  byteImageMinbytesEvaContentType?: string | null;
  byteImageMinbytesEva?: string | null;
  byteImageMaxbytesEvaContentType?: string | null;
  byteImageMaxbytesEva?: string | null;
  byteAnyEvaContentType?: string | null;
  byteAnyEva?: string | null;
  byteAnyRequiredEvaContentType?: string;
  byteAnyRequiredEva?: string;
  byteAnyMinbytesEvaContentType?: string | null;
  byteAnyMinbytesEva?: string | null;
  byteAnyMaxbytesEvaContentType?: string | null;
  byteAnyMaxbytesEva?: string | null;
  byteTextEva?: string | null;
  byteTextRequiredEva?: string;
}

export const defaultValue: Readonly<IFieldTestMapstructAndServiceClassEntity> = {
  booleanEva: false,
  booleanRequiredEva: false,
};
