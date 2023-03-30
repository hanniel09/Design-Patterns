import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Joana', age: 40 });
myDatabaseClassic.add({ name: 'Luiza', age: 35 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
