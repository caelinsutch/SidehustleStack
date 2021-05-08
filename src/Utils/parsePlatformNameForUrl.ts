import _ from 'lodash';

const parsePlatformNameForUrl = (platformName: string) =>
  _.toLower(platformName).replace(' ', '_');

export default parsePlatformNameForUrl;
