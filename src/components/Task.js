import React from 'react';
import EditTask from './edit/EditTask';

class Task extends React.Component {

    constructor(props) {
        super(props);
        this.elems = this.props.itemsTask;
        this.key = this.props.itemKey;
        this.state = {
            task: this.props.itemsTask,
            status: this.elems.status,
            contentTask: true,
            edit: false
        };
        //this.changeStatusComplete = this.changeStatusComplete.bind(this);
        this.editTask = this.editTask.bind(this);
        this.handlerCallbackEdit = this.handlerCallbackEdit.bind(this);
    }

    changeStatusComplete(e) {
        e.preventDefault();
        if (!this.state.status) {
            this.setState({
                status: true
            });
        }
    }

    editTask(e) {
        e.preventDefault();
        this.setState({
            edit: true,
            contentTask: false
        });
    }

    /*handlerCallbackEdit = (item) => {
        this.setState({
            task: {title: 'ff', createdAt: '3333/33/33',description: 'jgbcfybt', status: true},
            edit: false
        });
    }*/
    handlerCallbackEdit(item) {
        this.setState({
            task: item,
            edit: false,
            contentTask: true,
            status: item.status
        });
    }

    render () {
        let hideComplete = this.state.status ? 'hide' : '',
            statusColor = this.state.status ? 'completed' : '',
            showContent = this.state.contentTask ? '' : 'hide';  
        return (
            <div key={`task-${this.key}`} className="Task-item">
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
                <EditTask editCallback={this.handlerCallbackEdit} itemsTask={this.state.task} editTask={this.state.edit} /> 
            </div> 
        );
    }
}

export default Task;