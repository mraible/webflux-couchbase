import dayjs from 'dayjs';
import { EnumFieldClass } from 'app/shared/model/enumerations/enum-field-class.model';
import { EnumRequiredFieldClass } from 'app/shared/model/enumerations/enum-required-field-class.model';

export interface IFieldTestServiceClassAndJpaFilteringEntity {
  id?: string;
  stringBob?: string | null;
  stringRequiredBob?: string;
  stringMinlengthBob?: string | null;
  stringMaxlengthBob?: string | null;
  stringPatternBob?: string | null;
  integerBob?: number | null;
  integerRequiredBob?: number;
  integerMinBob?: number | null;
  integerMaxBob?: number | null;
  longBob?: number | null;
  longRequiredBob?: number;
  longMinBob?: number | null;
  longMaxBob?: number | null;
  floatBob?: number | null;
  floatRequiredBob?: number;
  floatMinBob?: number | null;
  floatMaxBob?: number | null;
  doubleRequiredBob?: number;
  doubleMinBob?: number | null;
  doubleMaxBob?: number | null;
  bigDecimalRequiredBob?: number;
  bigDecimalMinBob?: number | null;
  bigDecimalMaxBob?: number | null;
  localDateBob?: string | null;
  localDateRequiredBob?: string;
  instantBob?: string | null;
  instanteRequiredBob?: string;
  zonedDateTimeBob?: string | null;
  zonedDateTimeRequiredBob?: string;
  durationBob?: string | null;
  durationRequiredBob?: string;
  booleanBob?: boolean | null;
  booleanRequiredBob?: boolean;
  enumBob?: EnumFieldClass | null;
  enumRequiredBob?: EnumRequiredFieldClass;
  uuidBob?: string | null;
  uuidRequiredBob?: string;
  byteImageBobContentType?: string | null;
  byteImageBob?: string | null;
  byteImageRequiredBobContentType?: string;
  byteImageRequiredBob?: string;
  byteImageMinbytesBobContentType?: string | null;
  byteImageMinbytesBob?: string | null;
  byteImageMaxbytesBobContentType?: string | null;
  byteImageMaxbytesBob?: string | null;
  byteAnyBobContentType?: string | null;
  byteAnyBob?: string | null;
  byteAnyRequiredBobContentType?: string;
  byteAnyRequiredBob?: string;
  byteAnyMinbytesBobContentType?: string | null;
  byteAnyMinbytesBob?: string | null;
  byteAnyMaxbytesBobContentType?: string | null;
  byteAnyMaxbytesBob?: string | null;
  byteTextBob?: string | null;
  byteTextRequiredBob?: string;
}

export const defaultValue: Readonly<IFieldTestServiceClassAndJpaFilteringEntity> = {
  booleanBob: false,
  booleanRequiredBob: false,
};
