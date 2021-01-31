import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestServiceImplEntity {
  id?: string;
  stringMika?: string | null;
  stringRequiredMika?: string;
  stringMinlengthMika?: string | null;
  stringMaxlengthMika?: string | null;
  stringPatternMika?: string | null;
  integerMika?: number | null;
  integerRequiredMika?: number;
  integerMinMika?: number | null;
  integerMaxMika?: number | null;
  longMika?: number | null;
  longRequiredMika?: number;
  longMinMika?: number | null;
  longMaxMika?: number | null;
  floatMika?: number | null;
  floatRequiredMika?: number;
  floatMinMika?: number | null;
  floatMaxMika?: number | null;
  doubleRequiredMika?: number;
  doubleMinMika?: number | null;
  doubleMaxMika?: number | null;
  bigDecimalRequiredMika?: number;
  bigDecimalMinMika?: number | null;
  bigDecimalMaxMika?: number | null;
  localDateMika?: string | null;
  localDateRequiredMika?: string;
  instantMika?: string | null;
  instanteRequiredMika?: string;
  zonedDateTimeMika?: string | null;
  zonedDateTimeRequiredMika?: string;
  durationMika?: string | null;
  durationRequiredMika?: string;
  booleanMika?: boolean | null;
  booleanRequiredMika?: boolean;
  enumMika?: EnumFieldClass | null;
  enumRequiredMika?: EnumRequiredFieldClass;
  uuidMika?: string | null;
  uuidRequiredMika?: string;
  byteImageMikaContentType?: string | null;
  byteImageMika?: string | null;
  byteImageRequiredMikaContentType?: string;
  byteImageRequiredMika?: string;
  byteImageMinbytesMikaContentType?: string | null;
  byteImageMinbytesMika?: string | null;
  byteImageMaxbytesMikaContentType?: string | null;
  byteImageMaxbytesMika?: string | null;
  byteAnyMikaContentType?: string | null;
  byteAnyMika?: string | null;
  byteAnyRequiredMikaContentType?: string;
  byteAnyRequiredMika?: string;
  byteAnyMinbytesMikaContentType?: string | null;
  byteAnyMinbytesMika?: string | null;
  byteAnyMaxbytesMikaContentType?: string | null;
  byteAnyMaxbytesMika?: string | null;
  byteTextMika?: string | null;
  byteTextRequiredMika?: string;
}

export const defaultValue: Readonly<IFieldTestServiceImplEntity> = {
  booleanMika: false,
  booleanRequiredMika: false,
};
