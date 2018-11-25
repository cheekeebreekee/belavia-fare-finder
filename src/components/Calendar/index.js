import React, { Component } from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import {
    getDefaultStartDate,
    getDefaultEndDate,
    getEndDateBeforeSaleOff
} from '../../helpers/utils';
import 'react-dates/lib/css/_datepicker.css';
import './style.css';

const isDayOutOfBounds = (date) => {
    const dateBeforeBounds = getDefaultStartDate().endOf('day').subtract(1, 'days');
    const dateAfterBounds = getEndDateBeforeSaleOff().endOf('day').add(1, 'days');
    return date.isBefore(dateBeforeBounds) || date.isAfter(dateAfterBounds)
}

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: getDefaultStartDate(),
            endDate: getDefaultEndDate(),
            focusedInput: 'null',
        }
    }

    render() {
        return (
            <div className="DateRangePickerWrapper">
                <span className="DateRangePicker__field-placeholder">Даты вылета</span>
                <DateRangePicker
                    endDate={this.state.endDate}
                    endDateId={"end_date_id"}
                    endDatePlaceholderText={"Конец"}
                    startDate={this.state.startDate}
                    startDateId={"start_date_id"}
                    startDatePlaceholderText={"Начало"}
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    focusedInput={this.state.focusedInput}
                    isOutsideRange={isDayOutOfBounds}
                    displayFormat={"DD-MM-YYYY"}
                    showDefaultInputIcon
                    inputIconPosition={"after"}
                    hideKeyboardShortcutsPanel
                    calendarInfoPosition={"bottom"}
                    noBorder
                    readOnly
                />
            </div>
        )
    }

    getDateRange() {
        return {
            "start": this.props.startDate.format("YYYY-MM-DD"),
            "end": this.props.endDate.format("YYYY-MM-DD")
        }
    }
}

export default Calendar;
