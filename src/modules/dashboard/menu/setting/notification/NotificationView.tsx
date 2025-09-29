import { Stack, IconButton, Typography } from '@mui/material';
import { useHandleChangeSettingView } from '../setting-hooks';
import { ItemSettingInputCheckboxProp, SettingCurrentViewEnum, SettingNotificationView } from '../setting-types';
import { ItemSettingBox } from '../component/ItemSetting';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const NotificationView = <T extends SettingNotificationView>(
  props: T,
): React.ReactElement => {
  const { handleChangeSetting } = useHandleChangeSettingView();
  const{ data } = props;
  
  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton
          onClick={() =>
            handleChangeSetting(SettingCurrentViewEnum.MAIN, false)
          }
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={20} fontWeight={700} color="grey.700">
          { props.title }
        </Typography>
      </Stack>
      <Stack>
        {
          data.map((el) => (
            <>
              <Typography padding="10px" fontSize={16} fontWeight={600}>
                { el.configuration }
              </Typography>
              {
                el.children.map((item, index) => (
                  <ItemSettingBox key={index} {...item as unknown as ItemSettingInputCheckboxProp} />
                ))
              }
            </>
          ))
        }
      </Stack>
    </>
  );
};
