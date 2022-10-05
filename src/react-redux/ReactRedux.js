import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

const ReactRedux = () => {
    return (
        <div>
            {/*<Counter number={0}/>*/}
            <CounterContainer/>
            <hr/>
            {/*<Todos/>*/}
            <TodosContainer/>
        </div>
    )
}

export default ReactRedux;