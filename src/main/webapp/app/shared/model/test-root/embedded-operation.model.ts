import dayjs from 'dayjs';
import { IDocumentBankAccount } from 'app/shared/model/document-bank-account.model';

export interface IEmbeddedOperation {
  date?: string;
  description?: string | null;
  amount?: number;
  documentBankAccount?: IDocumentBankAccount | null;
}

export const defaultValue: Readonly<IEmbeddedOperation> = {};
