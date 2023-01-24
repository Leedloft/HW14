import React from 'react';
import AddTodoContainer from "../add-todo";
import FilterButton from "../filter-buttons";
import TodoListContainer from "../todo-list";

const AllItems = () => {
    return (
        <div>
            <AddTodoContainer/>
            <FilterButton/>
            <TodoListContainer/>
        </div>
    );
};

export default AllItems;