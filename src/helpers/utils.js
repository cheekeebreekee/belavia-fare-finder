import {
    daysCountBeforeSaleOn,
    defaultDateRangeInDays,
    daysCountBeforeSaleOff,
} from '../helpers/constants';
import Moment from 'moment';

const dateNow = new Date(Date.now());

const addDays = (date, daysCount) => {
    let gettedDate = new Date(date.valueOf());
    gettedDate.setDate(gettedDate.getDate() + daysCount);
    return gettedDate;
}

export const getDefaultStartDate = () => Moment(new Date(addDays(dateNow, daysCountBeforeSaleOn)));

export const getDefaultEndDate = () => Moment(new Date(addDays(dateNow, daysCountBeforeSaleOn + defaultDateRangeInDays)));

export const getEndDateBeforeSaleOff = () => Moment(new Date(addDays(dateNow, daysCountBeforeSaleOn + daysCountBeforeSaleOff)));