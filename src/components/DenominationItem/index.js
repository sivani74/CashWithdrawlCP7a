// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, onUpdateBalance} = props
  const {value} = details

  const onDeductAmount = () => {
    onUpdateBalance(value)
  }

  return (
    <li className="list-item">
      <button type="button" className="value-button" onClick={onDeductAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
