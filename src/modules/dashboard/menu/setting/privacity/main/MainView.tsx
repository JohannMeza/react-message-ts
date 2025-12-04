import { Stack, IconButton, Typography, Box } from '@mui/material';
import { ItemSettingOptionProp, SettingCurrentViewEnum } from '../../setting-types';
import { useHandleChangeSettingView } from '../../setting-hooks';
import { ItemSettingBox } from '../../component/ItemSetting';
import { ItemPrivacyMain } from '../privacity-types';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useEffect } from 'react';

export const MainView = <T extends ItemPrivacyMain>(
  props: T
): React.ReactElement => {
  const { handleChangeSetting, props: propsSetting } = useHandleChangeSettingView();
  const { handleChangePrivacity, handleChangeProps } = useHandleChangePrivacityView();
  
  useEffect(() => {
    handleChangeProps(propsSetting.props);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Box height={1} display="grid" gridTemplateRows="auto 1fr">
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
      <Stack height={1} overflow="auto">
        {
          propsSetting.props.data?.map((el) => (
            <Box>
              <ItemSettingBox idConfigurationUser={0} value={''} {...el as unknown as ItemSettingOptionProp} />
              {
                el.children.map((item, index) => (
                  <ItemSettingBox key={index} handleClick={() => {
                    handleChangeProps({
                      data: item.children,
                      title: item.configuration,
                      view: item.view
                    });
                    handleChangePrivacity(item.view, false);
                  }} { ...item } />
                ))
              }
            </Box>
          ))
        }
      </Stack>
    </Box>
  );
};
