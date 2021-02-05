import mock from './mock.json';
const initialState = {};
export class TransactionsService {
  static transactions = initialState;

  static async getRecent(qty) {
    const {transactions} = mock;
    TransactionsService.transactions = transactions;
    const orderedTransactions = TransactionsService.transactions.sort(
      (a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      },
    );
    return orderedTransactions.slice(0, qty);
  }

  static async get({startDate, endDate}) {
    const {transactions} = mock;
    TransactionsService.transactions = transactions;

    //sort transactions
    let filteredTransactions = TransactionsService.transactions.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    if (startDate && endDate) {
      filteredTransactions = filteredTransactions.filter((item) => {
        const date = new Date(item);
        return date - startDate >= 0 && date - endDate <= 0;
      });
    }
    return filteredTransactions;
  }
}
