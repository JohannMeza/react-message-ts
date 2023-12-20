import { Event, createEvent } from '@cobuildlab/react-simple-state';
import { SettingCurrentViewEnum } from './setting-types';

export const settingCurrentViewEvent = createEvent({ initialValue: { view: SettingCurrentViewEnum.MAIN, position: '0%' } });
export const settingCurrentViewEventError: Event<Error> = createEvent();