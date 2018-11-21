import React from 'react';
import ReactDOM from 'react-dom';

class FilterTask extends React.Component {

    constructor(props) {
        super(props);
    }

    handlerFilterClick(e) {
        e.preventDefault();
        let status = ReactDOM.findDOMNode(this.refs.status).checked;
        this.props.filterCallback(status);
    }

    render() {
        return (
            <div className="Task-filter">
                <label htmlFor="filter-status">Активность задачи</label>
                <input id="filter-status" ref="status" type="checkbox"/>
                <a className="Task-button filter" onClick={this.handlerFilterClick.bind(this)} href="#">Применить фильтр</a>
            </div>
        );
    }

}

export default FilterTask;