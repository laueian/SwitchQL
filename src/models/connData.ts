import DBType from './dbType';

interface ConnData {
    value: string;
    host: string;
    port: string;
    user: string;
    password: string;
    database: string;
    type: DBType;
}

export default ConnData