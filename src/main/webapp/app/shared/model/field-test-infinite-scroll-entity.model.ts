import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestInfiniteScrollEntity {
  id?: string;
  stringHugo?: string | null;
  stringRequiredHugo?: string;
  stringMinlengthHugo?: string | null;
  stringMaxlengthHugo?: string | null;
  stringPatternHugo?: string | null;
  integerHugo?: number | null;
  integerRequiredHugo?: number;
  integerMinHugo?: number | null;
  integerMaxHugo?: number | null;
  longHugo?: number | null;
  longRequiredHugo?: number;
  longMinHugo?: number | null;
  longMaxHugo?: number | null;
  floatHugo?: number | null;
  floatRequiredHugo?: number;
  floatMinHugo?: number | null;
  floatMaxHugo?: number | null;
  doubleRequiredHugo?: number;
  doubleMinHugo?: number | null;
  doubleMaxHugo?: number | null;
  bigDecimalRequiredHugo?: number;
  bigDecimalMinHugo?: number | null;
  bigDecimalMaxHugo?: number | null;
  localDateHugo?: string | null;
  localDateRequiredHugo?: string;
  instantHugo?: string | null;
  instanteRequiredHugo?: string;
  zonedDateTimeHugo?: string | null;
  zonedDateTimeRequiredHugo?: string;
  durationHugo?: string | null;
  durationRequiredHugo?: string;
  booleanHugo?: boolean | null;
  booleanRequiredHugo?: boolean;
  enumHugo?: EnumFieldClass | null;
  enumRequiredHugo?: EnumRequiredFieldClass;
  uuidHugo?: string | null;
  uuidRequiredHugo?: string;
  byteImageHugoContentType?: string | null;
  byteImageHugo?: string | null;
  byteImageRequiredHugoContentType?: string;
  byteImageRequiredHugo?: string;
  byteImageMinbytesHugoContentType?: string | null;
  byteImageMinbytesHugo?: string | null;
  byteImageMaxbytesHugoContentType?: string | null;
  byteImageMaxbytesHugo?: string | null;
  byteAnyHugoContentType?: string | null;
  byteAnyHugo?: string | null;
  byteAnyRequiredHugoContentType?: string;
  byteAnyRequiredHugo?: string;
  byteAnyMinbytesHugoContentType?: string | null;
  byteAnyMinbytesHugo?: string | null;
  byteAnyMaxbytesHugoContentType?: string | null;
  byteAnyMaxbytesHugo?: string | null;
  byteTextHugo?: string | null;
  byteTextRequiredHugo?: string;
}

export const defaultValue: Readonly<IFieldTestInfiniteScrollEntity> = {
  booleanHugo: false,
  booleanRequiredHugo: false,
};
