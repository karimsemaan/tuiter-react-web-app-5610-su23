import Classes from "./classes";
import ConditionalOutput from "./conditional-output";
import Styles from "./styles";
import TodoList from "./todo/todo-List";

function DynamicStyling() {
    return (
        <div>
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
        </div>
    );
}
export default DynamicStyling