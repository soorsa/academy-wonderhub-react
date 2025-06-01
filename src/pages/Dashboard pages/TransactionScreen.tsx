import TransactionsList from "../../components/DashboardComponents/TransactionsList";
import { transactionData } from "../../data/courses";
import type { Transaction } from "../../data/types/TransactionTypes";
import { formatPrice } from "../../utils/utilities";

const TransactionsPage = () => {
  const transactions: Transaction[] = transactionData;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-3xl flex flex-col col-span-2 md:col-span-1 items-center h-fit">
          <p className="text-gray-400 text-sm">Wallet Balance</p>
          <p className="font-bold">{formatPrice(400650)}</p>
        </div>
        <div className="p-4 bg-white rounded-3xl flex flex-col items-center h-fit">
          <p className="text-gray-400 text-sm">Total Invoice</p>
          <p className="font-bold">{formatPrice(1002000)}</p>
        </div>
        <div className="p-4 bg-white rounded-3xl flex flex-col items-center h-fit">
          <p className="text-gray-400 text-sm">Amount Paid</p>
          <p className="font-bold"> {formatPrice(500400)} </p>
        </div>
      </div>
      <TransactionsList data={transactions} isLoading={false} isError={false} />
    </div>
  );
};

export default TransactionsPage;
