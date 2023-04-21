// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props
  return (
    <div className="money-details-container">
      <div className="your-balance-container">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="money-type-container">
          <p className="money-type">Your Balance</p>
          <p className="money">Rs {yourBalance}</p>
        </div>
      </div>

      <div className="your-income-container">
        <img
          className="image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
        />
        <div className="money-type-container">
          <p className="money-type">Your Income</p>
          <p className="money">Rs {yourIncome}</p>
        </div>
      </div>

      <div className="your-expenses-container">
        <img
          className="image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
        />
        <div className="money-type-container">
          <p className="money-type">Your Expenses</p>
          <p className="money">Rs {yourExpenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
