import _ from 'lodash';

const parsePlatformNameFromUrl = (url: string) =>
  _.toLower(url).replace('_', ' ');

export default parsePlatformNameFromUrl;
