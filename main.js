import lodash from 'lodash';
import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import validator from 'validator';
// import { colors } from 'colors';

const array = [1,2,3,4,1,3,4,4,5,1,1,4,];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);
console.log(chalk.blueBright("HELLO"));
console.log(chalk.yellow("Hello, with Chalk!"));


// let fakeAccount = {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     registeredAt: faker.date.past()
// };

// console.log(fakeAccount.userId);
// console.log(fakeAccount.username);
// console.log(fakeAccount.email);
// console.log(fakeAccount.registeredAt);