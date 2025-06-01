export type TransactionStatus = "success" | "pending" | "failed";
export interface Transaction {
  id: number;
  amount: number;
  description: string;
  payment_method: string;
  created_at?: string;
  status: TransactionStatus;
  transaction_id?: string;
}
