import React from 'react';
import PropTypes from 'prop-types';
import EditTask from './edit/EditTask';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.elems = this.props.itemsTask;
        this.state = {
            task: this.elems,
            status: this.elems.status,
            contentTask: true,
            edit: false
        };
        //this.changeStatusComplete = this.changeStatusComplete.bind(this);
        this.handlerCallbackEdit = this.handlerCallbackEdit.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    changeStatusComplete(e) {
        e.preventDefault();
        if (!this.state.status) {
            this.setState({
                status: true
            });
            this.props.taskCallback(this.state.task, false);
        }
    }

    editTask(e) {
        e.preventDefault();
        this.setState({
            edit: !this.state.edit,//true,
            contentTask: false
        });
    }

    handlerCallbackEdit(item, edit) {
        this.setState({
            task: item,
            status: item.status,
            contentTask: true,
            edit: edit,
        });
        this.props.taskCallback(item);
    }

    render () {
        let hideComplete = this.state.status ? 'hide' : '',
            statusColor = this.state.status ? 'completed' : '',
            showContent = this.state.contentTask ? '' : 'hide',
            editBlock = this.state.edit ? '' : 'hide'; 
        return (
            <div className="Task-item">
                <div className={`Task-item-content ${showContent}`}>
                    <span className="Task-created">
                        {this.state.task.createdAt}
                    </span>
                    <h4>{this.state.task.title}</h4>
                    <span className={`Task-status ${statusColor}`}>
                        {this.state.status ? 'Задача выполнена' : 'Ожидает выполнения'}
                    </span>
                    <div className="Task-description">
                        {this.state.task.description}
                    </div>
                    <a href="#" className={`Task-button complete ${hideComplete}`} onClick={this.changeStatusComplete.bind(this)}>Завершить</a>
                    <a href="#" className="Task-button edit" onClick={this.editTask}>Редактировать</a>
                </div>
                <div className={`Edit-block ${editBlock}`}>
                    <EditTask key={this.elems.id} editCallback={this.handlerCallbackEdit} itemsTask={this.state.task} /> 
                </div>
            </div> 
        );
    }
}

Task.propTypes = {
    itemsTask: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
    }),
    taskCallback: PropTypes.func
}

export default Task;