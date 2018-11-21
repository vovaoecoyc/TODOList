import React from 'react';
import ReactDOM from 'react-dom';

class SearchTask extends React.Component {

    constructor(props) {
        super(props);
    }

    handlerChangeSearchField(e) {
        e.preventDefault();
        let searchString = e.target.value;
        this.props.searchCallback(searchString);
    }

    render() {
        return (
            <div className="Task-Search">
                <input onChange={this.handlerChangeSearchField.bind(this)} placeholder="Введите поисковый запрос" id="task-search" ref="search" type="text"/>
            </div>
        );
    }

}

export default SearchTask;