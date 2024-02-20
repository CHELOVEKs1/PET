import React, {useContext} from 'react'
import { TransactionsUpd } from './transactionsUpd'

import { GlobalContext } from '../context/globalState'

export const Transactions = () => {
  const { transactions } = useContext(GlobalContext);

  
  return (
    <div>
        <h3>История</h3>
        <ul className="list">
          {transactions.map(transaction => (
            <TransactionsUpd key={transaction.id} transaction={transaction}/>
          ))}
            
        </ul>
    </div>
  )
}
