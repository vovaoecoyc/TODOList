import React from 'react';
import ReactDOM from 'react-dom';

class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            add: this.props.showAdd
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                add: nextProps.showAdd
            });
        }
    }

    handlerSaveAddFields() {
        let title = ReactDOM.findDOMNode(this.refs.title).value,
            date = new Date(),
            status = ReactDOM.findDOMNode(this.refs.status).checked,
            description = ReactDOM.findDOMNode(this.refs.description).value,
            createdAt = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() ;
        ReactDOM.findDOMNode(this.refs.title).value = '';
        ReactDOM.findDOMNode(this.refs.description).value = '';
        ReactDOM.findDOMNode(this.refs.status).checked = false;
        this.props.addCallback({
            title: title,
            createdAt: createdAt,
            status: status,
            description: description
        });
    }

    render() {
        let showAdd = this.state.add ? '' : 'hide';
        return(
            <div className={`Task-add ${showAdd}`}>
                <input placeholder="Введите заголовок" ref="title" type="text"/>
                <div className="Checkbox-block">
                    <label htmlFor="status-add">Выполнение</label>
                    <input defaultChecked={false} id="status-add" ref="status" type="checkbox"/>
                </div>
                <textarea ref="description" placeholder="Введите описание задачи" id="description-add" cols="50" rows="5"></textarea>
                <a href="#" onClick={this.handlerSaveAddFields.bind(this)} className="Task-button save">Сохранить</a>
            </div>
        );
    }

}

export default AddTask;