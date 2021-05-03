import { useRouter } from 'next/router';
import { parsePlatformNameForUrl } from '@Utils';

const useNavigateToPlatform = () => {
  const router = useRouter();

  const navigateToPlatform = (platformName: string): Promise<any> =>
    router.push(`/${parsePlatformNameForUrl(platformName)}`);

  return {
    navigateToPlatform,
  };
};

export default useNavigateToPlatform;
