import './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const createColor = () => {
  return '#' + Math.random().toString(16).substr(-6);
 };

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr className='titleTr'>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} 
            style={{ backgroundColor: createColor() }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
