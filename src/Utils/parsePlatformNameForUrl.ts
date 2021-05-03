import _ from 'lodash';

const parsePlatformNameForUrl = (platformName: string) =>
  _.kebabCase(platformName);

export default parsePlatformNameForUrl;
