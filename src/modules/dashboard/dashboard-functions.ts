import { MONTHS_NAME, WEEKDAYS_NAME } from '@src/shared/constant/configMoments';
import moment from 'moment';

moment.locale('es', { weekdays : WEEKDAYS_NAME, months: MONTHS_NAME });

export const getDateDaysOrMonths = (createdAt: number): string => {
  const countDaysAgo = moment().diff(moment(createdAt).format('dddd, YYYY-MM-DD HH:mm:ss'), 'days');

  if (30 < countDaysAgo) {
    const countMonthAgo = moment().diff(moment(createdAt).format('dddd, YYYY-MM-DD HH:mm:ss'), 'month',);
    return `Hace ${countMonthAgo} mes${countDaysAgo > 1 ? 'es': ''}`;
  } else if (0 === countDaysAgo) {
    return 'Today';
  } else {
    return `Hace ${countDaysAgo} día${countDaysAgo > 1 ? 's': ''}`;
  }
};

export const getPastDate = (createdAt: number): string => {
  const countDaysAgo = moment().diff(moment(createdAt).format('dddd, YYYY-MM-DD HH:mm:ss'), 'days');
  if (countDaysAgo === 0) return 'Hoy';
  else if (countDaysAgo < 7) return moment(createdAt).format('dddd');
  else return moment(createdAt).format('DD/MM/YYYY');
};