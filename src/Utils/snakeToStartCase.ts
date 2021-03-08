import _ from 'lodash';

const snakeToStartCase = (str: string): string =>
  _.startCase(_.toLower(str.replace(/_/g, ' ')));

export default snakeToStartCase;
