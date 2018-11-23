import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class EditTask extends React.Component {

    constructor(props) {
        super(props);
        this.task = this.props.itemsTask;
        this.state = {
            edit: this.edit
        };
        //this.handleSaveClick = this.handlerSaveClick.bind(this);
    }

    /*componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                edit: nextProps.editTask
            });
        }
    }*/
    /*static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editTask !== prevState.edit) {
            return {
                edit: nextProps.editTask
            }
        }
        return null; 
    }*/

    componentDidUpdate() {
        ReactDOM.findDOMNode(this.refs.title).focus();
    }

    handlerSaveClick(e) {
        e.preventDefault();
        let title = ReactDOM.findDOMNode(this.refs.title).value,
            description = ReactDOM.findDOMNode(this.refs.description).value,
            status = ReactDOM.findDOMNode(this.refs.status).checked,
            createdAt = this.task.createdAt,
            id = this.task.id;
        this.props.editCallback({
            id: id,
            title: title,
            createdAt: createdAt,
            description: description,
            status: status,
        }, false); 
    }

    render() {
        return (
            <div className="Task-edit">
                <input ref="title" type="text" placeholder="Введите заголовок" defaultValue={this.task.title} />
                <div className="Status-block">
                    <label htmlFor="task-status">Выполнение:</label>
                    <input ref="status" defaultChecked={this.task.status} type="checkbox" id="task-status"/>
                </div>
                <textarea rows="5" ref="description" defaultValue={this.task.description} />
                <a href="#" className="Task-button save" onClick={this.handlerSaveClick.bind(this)}>Сохранить</a>
            </div>
        );
    }

}

EditTask.propTypes = {
    editCallback: PropTypes.func,
    itemsTask: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        description: PropTypes.string.isRequired,
    })
}

export default EditTask;