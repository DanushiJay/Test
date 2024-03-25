import {Pool} from 'pg';

export const pool = new Pool ({
    user: 'postgres',
    password: 'axinom',
    port: 5433,
    database: 'todo',
});
