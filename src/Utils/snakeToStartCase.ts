import _ from 'lodash';

const snakeToStartCase = (str: string): string =>
  _.startCase(_.toLower(str.replaceAll('_', ' ')));

export default snakeToStartCase;
