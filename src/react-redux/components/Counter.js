const Counter = ({number, onIncrement, onDecrement}) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        </div>
    );
}

export default Counter;