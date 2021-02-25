/* eslint-disable import/no-cycle */
import {Table, Model, Column, DataType, AllowNull, Scopes, HasMany} from 'sequelize-typescript';

import {Post} from './post';
import {Topic} from './topic';

export interface UserFields {
    id: number;
    name: string;
}

@Scopes(() => ({
    core: {
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    }
}))
@Table
export class User extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name: string;

    @HasMany(() => Topic)
    topics: Topic[];

    @HasMany(() => Post)
    posts: Post[];
}
