import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestEntity {
  id?: string;
  stringTom?: string | null;
  stringRequiredTom?: string;
  stringMinlengthTom?: string | null;
  stringMaxlengthTom?: string | null;
  stringPatternTom?: string | null;
  numberPatternTom?: string | null;
  numberPatternRequiredTom?: string;
  integerTom?: number | null;
  integerRequiredTom?: number;
  integerMinTom?: number | null;
  integerMaxTom?: number | null;
  longTom?: number | null;
  longRequiredTom?: number;
  longMinTom?: number | null;
  longMaxTom?: number | null;
  floatTom?: number | null;
  floatRequiredTom?: number;
  floatMinTom?: number | null;
  floatMaxTom?: number | null;
  doubleRequiredTom?: number;
  doubleMinTom?: number | null;
  doubleMaxTom?: number | null;
  bigDecimalRequiredTom?: number;
  bigDecimalMinTom?: number | null;
  bigDecimalMaxTom?: number | null;
  localDateTom?: string | null;
  localDateRequiredTom?: string;
  instantTom?: string | null;
  instantRequiredTom?: string;
  zonedDateTimeTom?: string | null;
  zonedDateTimeRequiredTom?: string;
  durationTom?: string | null;
  durationRequiredTom?: string;
  booleanTom?: boolean | null;
  booleanRequiredTom?: boolean;
  enumTom?: EnumFieldClass | null;
  enumRequiredTom?: EnumRequiredFieldClass;
  uuidTom?: string | null;
  uuidRequiredTom?: string;
  byteImageTomContentType?: string | null;
  byteImageTom?: string | null;
  byteImageRequiredTomContentType?: string;
  byteImageRequiredTom?: string;
  byteImageMinbytesTomContentType?: string | null;
  byteImageMinbytesTom?: string | null;
  byteImageMaxbytesTomContentType?: string | null;
  byteImageMaxbytesTom?: string | null;
  byteAnyTomContentType?: string | null;
  byteAnyTom?: string | null;
  byteAnyRequiredTomContentType?: string;
  byteAnyRequiredTom?: string;
  byteAnyMinbytesTomContentType?: string | null;
  byteAnyMinbytesTom?: string | null;
  byteAnyMaxbytesTomContentType?: string | null;
  byteAnyMaxbytesTom?: string | null;
  byteTextTom?: string | null;
  byteTextRequiredTom?: string;
}

export const defaultValue: Readonly<IFieldTestEntity> = {
  booleanTom: false,
  booleanRequiredTom: false,
};
