import { Icon } from '@lobehub/ui';
import { Typography } from 'antd';
import { GitBranch } from 'lucide-react';
import { Flexbox } from 'react-layout-kit';

import { oneLineEllipsis } from '@/styles';

const Header = () => {
  // const [previewFileId] = useChatStore((s) => [chatPortalSelectors.previewFileId(s)]);

  return (
    <Flexbox align={'center'} gap={8} horizontal style={{ marginInlineStart: 8 }}>
      <Icon icon={GitBranch} size={{ fontSize: 20 }} />
      <Typography.Text className={oneLineEllipsis} style={{ fontSize: 16, fontWeight: 'bold' }}>
        新子话题名称（Optional）
      </Typography.Text>
    </Flexbox>
  );
};

export default Header;
