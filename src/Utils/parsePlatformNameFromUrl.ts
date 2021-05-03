import _ from 'lodash';

const parsePlatformNameFromUrl = (url: string) => _.startCase(_.toLower(url));

export default parsePlatformNameFromUrl;
