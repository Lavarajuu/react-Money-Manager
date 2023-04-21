// Write your code here
import './index.css'

const TransactionItem = props => {
  const {amountDetails, deleteTransaction} = props
  const {id, title, amount, amountType} = amountDetails

  const onClickDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <ul className="money-information-container">
      <li className="money-info">{title}</li>
      <li className="money-info">Rs {amount}</li>
      <li className="money-info">{amountType}</li>
      <li>
        <button
          className="delete-button"
          type="button"
          onClick={onClickDeleteButton}
        >
          <img
            alt="delete"
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          />
        </button>
      </li>
    </ul>
  )
}
export default TransactionItem
