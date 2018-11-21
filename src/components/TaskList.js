import React from 'react';
import Task from './Task';
import AddTask from './add/AddTask';
import SearchTask from './search/SearchTask';
import FilterTask from './filter/FilterTask';

class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.task = this.props.dataTasks;
        this.state = {
            taskList: this.props.dataTasks,
            add: false
        }
        this.handlerCallbackAdd = this.handlerCallbackAdd.bind(this);
        this.handlerCallbackSearch = this.handlerCallbackSearch.bind(this);
        this.handlerCallbackFilter = this.handlerCallbackFilter.bind(this);
    }

    handlerAddClick(e) {
        e.preventDefault();
        this.setState({
            add: true
        });
    }

    handlerCallbackAdd(item) {
        let newTaskList = this.state.taskList;
        newTaskList.push(item);
        this.setState({
            taskList: newTaskList,
            add: false
        });
    }

    handlerCallbackSearch(searchString) {
        if (searchString !== '' && searchString !== undefined) {
            let filtredTaskList = [];
            filtredTaskList = this.state.taskList.filter(function(value, i) {
                if (value.description.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                    return true;
                }
                // return false;
            });
            this.setState({
                taskList: filtredTaskList
            });
        }
        else {
            this.setState({
                taskList: this.task
            });
        }
    }

    handlerCallbackFilter(status) {
        if (status !== '' && status !== undefined) {
            let filtredTaskList = [];
            filtredTaskList = this.task.filter(function(value, i) {
                if (status === true && value.status) {
                    return true;
                }
                else if (status === false && !value.status) {
                    return true;
                }
                return false;
            });
            
            this.setState({
                taskList: filtredTaskList
            });
        }
    }

    render() {
        return (
            <div className="Task-container">
                <div className="Task-navigation">
                    <div className="Task-add-block">
                        <a href="#" className="Task-button add" onClick={this.handlerAddClick.bind(this)} >Добавить задачу</a>
                    </div>
                    <SearchTask searchCallback={this.handlerCallbackSearch} />
                    <FilterTask filterCallback={this.handlerCallbackFilter} />
                </div>
                <AddTask addCallback={this.handlerCallbackAdd} showAdd={this.state.add} />
                {
                    this.state.taskList.map(function(value, i) {
                        return <Task key={i} itemKey={i} itemsTask={value} />;
                    })
                }
            </div>
        );
    }

}

export default TaskList;