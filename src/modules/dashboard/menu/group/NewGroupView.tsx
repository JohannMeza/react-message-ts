import { FC, PropsWithChildren } from 'react';
import { MemberView } from './member/MemberView';
import { useHandleChangeGroupView } from './group-hooks';
import { GroupCurrentViewEnum } from './group-types';
import { InformationView } from './information/InformationView';
import { ContainedView } from '../../component/ContainedBoxView';

export const NewGroupView: FC<PropsWithChildren> = () => {
  const { currentView, position } = useHandleChangeGroupView();

  const GroupViewCurrent = {
    [GroupCurrentViewEnum.INFORMATION]: <InformationView />,
    [GroupCurrentViewEnum.MEMBER]: <MemberView />,
  };

  return (
    <>
      <ContainedView
        moveposition={position}
        children={GroupViewCurrent[currentView]}
      />
    </>
  );
};
