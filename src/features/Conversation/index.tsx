import { Suspense, lazy } from 'react';
import { Flexbox } from 'react-layout-kit';

import SkeletonList from './components/SkeletonList';

const ChatList = lazy(() => import('./components/VirtualizedList'));

interface ConversationProps {
  mobile?: boolean;
  thread?: { messageId?: string };
  threadMode?: boolean;
}

const Conversation = ({ mobile, thread, threadMode }: ConversationProps) => {
  return (
    <Flexbox
      flex={1}
      style={{
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative',
      }}
      width={'100%'}
    >
      <Suspense fallback={<SkeletonList mobile={mobile} />}>
        <ChatList mobile={mobile} threadMessageId={thread?.messageId} threadMode={threadMode} />
      </Suspense>
    </Flexbox>
  );
};

export default Conversation;
