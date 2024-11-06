import { Suspense, lazy } from 'react';
import { Flexbox } from 'react-layout-kit';

import SkeletonList from './components/SkeletonList';

const ChatList = lazy(() => import('./components/VirtualizedList'));

interface ConversationProps {
  mobile?: boolean;
  threadMode?: boolean;
}

const Conversation = ({ mobile, threadMode }: ConversationProps) => {
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
        <ChatList mobile={mobile} threadMode={threadMode} />
      </Suspense>
    </Flexbox>
  );
};

export default Conversation;
