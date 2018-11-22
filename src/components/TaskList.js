import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
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
        this.handlerCallbackStatusTask = this.handlerCallbackStatusTask.bind(this);
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
            let filtredTaskList = [],
                beforeSearch = this.state.taskList;
            filtredTaskList = this.state.taskList.filter(function(value, i) {
                if (value.description.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                    return true;
                }
                // return false;
            });
            console.log(filtredTaskList);
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

    handlerCallbackFilter(data, clear = false) {
        if (!clear) {
            if (data.inputState !== '' && data.inputState !== undefined) {
                let filtredTaskList = [];
                filtredTaskList = this.state.taskList.filter(function(value, i) {
                    if (Moment(data.inputLeftDate, 'YYYY/MM/DD').isValid() &&
                     Moment(data.inputRightDate, 'YYYY/MM/DD').isValid() &&
                     +Moment(data.inputLeftDate).format('x') <= +Moment(data.inputRightDate).format('x')) {

                        if (+Moment(value.createdAt).format('x') >= +Moment(data.inputLeftDate).format('x') && 
                        +Moment(value.createdAt).format('x') <= +Moment(data.inputRightDate).format('x')) {
                            if (data.inputState === true && value.status) {
                                return true;
                            }
                            else if (data.inputState === false && !value.status) {
                                return true;
                            }
                            return false;
                        }
                    }
                    else {
                        if (data.inputState === true && value.status) {
                            return true;
                        }
                        else if (data.inputState === false && !value.status) {
                            return true;
                        }
                        return false;
                    }
                });
                this.setState({
                    taskList: filtredTaskList
                });
            }
        }
        else {
            this.setState({
                taskList: this.task
            });
        }
        
    }

    handlerCallbackStatusTask(status) {
        this.setState({
            status: status
        });
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
                    this.state.taskList.map((value, i) => 
                         <Task taskCallback={this.handlerCallbackStatusTask} key={value.title} itemsTask={value} />
                    )
                }
            </div>
        );
    }

}

TaskList.propTypes = {
    dataTasks: PropTypes.array
}

export default TaskList;