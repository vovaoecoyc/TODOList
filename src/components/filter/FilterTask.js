import React from 'react';
import PropTypes from 'prop-types';

class FilterTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputState: false,
            inputLeftDate: '',
            inputRightDate: '',
            filtered: false
        }
    }

    handlerFilterClick(e) {
        e.preventDefault();
        //this.handlerClearFilterClick(e);
        this.setState({
            filtered: true
        });
        this.props.filterCallback({
            inputState: this.state.inputState,
            inputLeftDate: this.state.inputLeftDate,
            inputRightDate: this.state.inputRightDate
        });
    }

    handlerClearFilterClick(e) {
        e.preventDefault();
        this.setState({
            filtered: false
        });
        let clear = true;
        this.props.filterCallback([], clear)
    }

    handlerStatusTask(e) {
        let status = e.target.value === 'completed' ? true : false;
        this.setState({
            inputState: status,
        });
    }

    handlerleftBorderData(e) {
        this.setState({
            inputLeftDate: e.target.value,
        });
    }

    handlerRightBorderData(e) {
        this.setState({
            inputRightDate: e.target.value,
        });
    }

    render() {
        let filtered = this.state.filtered ? 'hide' : '',
            filteredClear = this.state.filtered ? '' : 'hide';
        return (
            <div className="Task-filter">
                <div className="Filter-status">
                    <label htmlFor="filter-status">Активность задачи</label>
                    <select value={this.state.inputState ? 'completed' : 'active'} id="filter-status" onChange={this.handlerStatusTask.bind(this)}>
                        <option value="completed">Выполнена</option>
                        <option value="active">Ожидает выполнения</option>
                    </select>
                    {/* <input onChange={this.handlerStatusTask.bind(this)} id="filter-status" ref="status" type="checkbox"/> */}
                </div>
                <div className="Filter-date">
                    <label htmlFor="date-left">Диапазон дат</label>
                    <input onChange={this.handlerleftBorderData.bind(this)} id="date-left" type="text" placeholder="Формат _ _ _ _/_ _/_ _"/>
                    <input onChange={this.handlerRightBorderData.bind(this)} type="text" placeholder="Формат _ _ _ _/_ _/_ _"/>
                </div>
                <div className="Task-filter-action">
                    <a className={`Task-button filter ${filtered}`} onClick={this.handlerFilterClick.bind(this)} href="#">Применить фильтр</a>
                    <a className={`Task-button filter-clear ${filteredClear}`} onClick={this.handlerClearFilterClick.bind(this)} href="#">Сбросить фильтр</a>
                </div>
            </div>
        );
    }

}

FilterTask.propTypes = {
    filterCallback: PropTypes.func
}

export default FilterTask;