import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 40 });
myDatabaseClassic.add({ name: 'Eduardo', age: 35 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();

export { myDatabaseClassic };
