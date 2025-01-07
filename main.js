import lodash from 'lodash';
import chalk from 'chalk';

const array = [1,2,3,4,1,3,4,4,5,1,1,4,];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);

console.log(chalk.bgGray("HELLO"));
console.log(chalk.blueBright("Hello, with Chalk!"));