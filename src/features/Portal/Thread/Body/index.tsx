import { Input } from 'antd';
import { Flexbox } from 'react-layout-kit';

import DesktopChatInput from '@/app/(main)/chat/(workspace)/@conversation/features/ChatInput/Desktop';
import { ActionKeys } from '@/features/ChatInput/ActionBar/config';
import Conversation from '@/features/Conversation';
import { useChatStore } from '@/store/chat';
import { chatPortalSelectors } from '@/store/chat/selectors';

const leftActions = ['fileUpload', 'stt', 'token'] as ActionKeys[];

const rightActions = [] as ActionKeys[];

const ThreadBody = () => {
  const threadMessageId = useChatStore(chatPortalSelectors.threadMessageId);
  return (
    <Flexbox flex={1} gap={12}>
      <Flexbox paddingInline={12}>
        <Input placeholder={'在这里输入子话题名称'} variant={'filled'} />
      </Flexbox>
      <Flexbox height={'100%'}>
        <Conversation thread={{ messageId: threadMessageId }} threadMode />
        <DesktopChatInput
          leftActions={leftActions}
          rightActions={rightActions}
          showSaveTopic={false}
        />
      </Flexbox>
    </Flexbox>
  );
};

export default ThreadBody;
