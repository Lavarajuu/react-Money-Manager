import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    amountType: 'Income',
    amountTransactionDetails: [],
    yourBalance: 0,
    yourIncome: 0,
    yourExpenses: 0,
  }

  onEnteredAmount = event => {
    this.setState({amount: event.target.value})
  }

  onEnteredTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeOption = event => {
    this.setState({amountType: event.target.value})
  }

  onClickedAddButton = () => {
    const {title, amount, amountType} = this.state

    const newAmountInformation = {
      id: v4(),
      title,
      amount,
      amountType,
    }
    this.setState(prevState => ({
      amountTransactionDetails: [
        ...prevState.amountTransactionDetails,
        newAmountInformation,
      ],
      title: '',
      amount: '',
      amountType: 'Income',
    }))

    if (amountType === 'Income') {
      this.setState(prevState => ({
        yourBalance: prevState.yourBalance + parseInt(amount),
        yourIncome: prevState.yourIncome + parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        yourBalance: prevState.yourBalance - parseInt(amount),
        yourExpenses: prevState.yourExpenses + parseInt(amount),
      }))
    }
  }

  deleteTransaction = id => {
    const {amountTransactionDetails} = this.state
    const filteredTransaction = amountTransactionDetails.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({
      amountTransactionDetails: filteredTransaction,
    })

    const deletedTransaction = amountTransactionDetails.filter(
      eachTransaction => eachTransaction.id === id,
    )
    const {amount, amountType} = deletedTransaction[0]

    if (amountType === 'Income') {
      this.setState(prevState => ({
        yourIncome: prevState.yourIncome - parseInt(amount),
        yourBalance: prevState.yourBalance - parseInt(amount),
      }))
    } else {
      this.setState(prevState => ({
        yourExpenses: prevState.yourExpenses - parseInt(amount),
        yourBalance: prevState.yourBalance + parseInt(amount),
      }))
    }
  }

  render() {
    const {
      title,
      amount,
      amountType,
      amountTransactionDetails,
      yourBalance,
      yourIncome,
      yourExpenses,
    } = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="manager-details-container">
            <h1 className="manager-name">Hi, Richard</h1>
            <p className="welcome-message">
              Welcome back to your{' '}
              <span className="welcome-message-span-text">Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            yourBalance={yourBalance}
            yourIncome={yourIncome}
            yourExpenses={yourExpenses}
          />
          <div className="transaction-history-container">
            <div className="transaction-container">
              <h1 className="heading">Add Transaction</h1>
              <div className="title-input-container">
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  className="input"
                  placeholder="TITLE"
                  onChange={this.onEnteredTitle}
                  value={title}
                />
              </div>

              <div className="amount-input-container">
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <br />
                <input
                  type="text"
                  id="amount"
                  className="input"
                  placeholder="AMOUNT"
                  onChange={this.onEnteredAmount}
                  value={amount}
                />
              </div>

              <div className="type-input-container">
                <label className="label" htmlFor="type">
                  TYPE
                </label>
                <br />
                <select
                  className="input"
                  id="type"
                  onChange={this.onChangeOption}
                  value={amountType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.displayText}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                className="add-button"
                onClick={this.onClickedAddButton}
              >
                Add
              </button>
            </div>

            <div className="history-container">
              <h1 className="heading">History</h1>
              <div className="history-list-headings-container">
                <p className="history-list-heading">Title</p>
                <p className="history-list-heading">Amount</p>
                <p className="history-list-heading">Type</p>
              </div>

              {amountTransactionDetails.map(amountDetails => (
                <TransactionItem
                  key={amountDetails.id}
                  amountDetails={amountDetails}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
