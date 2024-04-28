import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useScroll = () => {
  const { pathname, asPath } = useRouter();
  useEffect(() => {
    if (pathname === '/mag/[slug]') {
      document.getElementsByTagName('html')[0].style.scrollBehavior = 'unset';
      window.scrollTo({ top: 0 });
    } else {
      document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth';
    }
  }, [pathname, asPath]);
};
