import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/globalState';



export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
  
    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
  
      addTransaction(newTransaction);
    }
  
    return (
      <>
        <h3>Добавьте новую запись</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Напишите текст..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Сумма<br />
              (отрицательный - расход, положительный - доход)</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Напишите сумму..." />
          </div>
          <button className="btn">добавить платеж</button>
        </form>
      </>
    )
  }