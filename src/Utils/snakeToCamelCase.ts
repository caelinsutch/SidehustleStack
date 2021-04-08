import _ from 'lodash';

const snakeToCamelCase = (str: string): string => _.camelCase(str);

export default snakeToCamelCase;
