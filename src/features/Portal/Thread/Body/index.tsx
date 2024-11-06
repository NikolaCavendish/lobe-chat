import { Avatar, Icon } from '@lobehub/ui';
import { Input } from 'antd';
import { GitBranch } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

import DesktopChatInput from '@/app/(main)/chat/(workspace)/@conversation/features/ChatInput/Desktop';
import Conversation from '@/features/Conversation';

const ThreadBody = () => {
  return (
    <Flexbox height={'100%'} justify={'space-between'} paddingInline={12}>
      <div />
      <Flexbox flex={1} gap={12}>
        <Avatar
          avatar={<Icon icon={GitBranch} size={'large'} />}
          background={'#3f4148'}
          size={56}
        />
        子话题名称（Optional）
        <Input placeholder={'abc'} variant={'filled'} />
        <Flexbox height={'100%'}>
          <Conversation threadMode />
          <DesktopChatInput />
        </Flexbox>
      </Flexbox>
    </Flexbox>
  );
};

export default ThreadBody;
