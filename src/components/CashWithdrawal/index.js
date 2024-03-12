// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    updatedBalance: 2000,
  }

  onUpdateBalance = value => {
    this.setState(prevState => ({
      updatedBalance: prevState.updatedBalance - value,
    }))
  }

  render() {
    const {updatedBalance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="profile-container">
            <div className="initial-container">
              <p className="initial">s</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{updatedBalance}</p>
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                details={eachItem}
                onUpdateBalance={this.onUpdateBalance}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
