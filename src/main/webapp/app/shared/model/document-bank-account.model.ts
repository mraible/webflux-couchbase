import dayjs from 'dayjs';
import { IEmbeddedOperation } from 'app/shared/model/test-root/embedded-operation.model';
import { BankAccountType } from 'app/shared/model/enumerations/bank-account-type.model';

export interface IDocumentBankAccount {
  id?: string;
  name?: string;
  bankNumber?: number | null;
  agencyNumber?: number | null;
  lastOperationDuration?: number | null;
  meanOperationDuration?: number | null;
  balance?: number;
  openingDay?: string | null;
  lastOperationDate?: string | null;
  active?: boolean | null;
  accountType?: BankAccountType | null;
  attachmentContentType?: string | null;
  attachment?: string | null;
  description?: string | null;
  embeddedOperations?: IEmbeddedOperation[] | null;
}

export const defaultValue: Readonly<IDocumentBankAccount> = {
  active: false,
};
