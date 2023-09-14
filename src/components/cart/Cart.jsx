import PropTypes from "prop-types";

const Cart = ({ SingleCardData, flag, costTotal, remainingTotal }) => {
    
    return (
        <div>
            <h1 className="text-center font-bold text-lg mb-4">Cart Area</h1>
            <div>
                <h4 className="text-center text-lg font-semibold">Total Gudget: 20000$</h4>
                <div className=" mt-5 space-y-2">
                    <h5>Remaining : { remainingTotal}</h5>
                    <h5>Total Cost : { costTotal } </h5>
                </div>
            </div>

            <div className={`${flag ? 'bg-sky-200 px-5 py-4 rounded-lg space-y-1 my-8':''}`}>
                {
                    SingleCardData.map(singleData => <li key={singleData.id}>{ singleData.actor_name }</li>)
                }
            </div>
        </div>
    );
};
Cart.propTypes = {
    SingleCardData: PropTypes.array,
    flag:PropTypes.bool,
    costTotal:PropTypes.number,
    remainingTotal:PropTypes.number
}

export default Cart;