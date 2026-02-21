'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export default function Comments(){
	const { theme } = useTheme();
	return (
    <Giscus
      id="comments"
      repo="chanloveit/chansworld"
      repoId="R_kgDOQ4NIow"
      category="Announcements"
      categoryId="DIC_kwDOQ4NIo84C03Gc"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="ko"
      loading="lazy"
    />
  );
}
