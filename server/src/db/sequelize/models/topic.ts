/* eslint-disable import/no-cycle */
import {
    Table,
    Model,
    Column,
    DataType,
    BelongsTo,
    HasMany,
    ForeignKey,
    Scopes,
    Length,
    AllowNull
} from 'sequelize-typescript';

import {Post} from './post';
import {User} from './user';

@Scopes(() => ({
    user: {
        include: [
            {
                model: User.scope('core')
            }
        ],
        attributes: {
            exclude: ['userId']
        }
    }
}))
@Table
export class Topic extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @AllowNull(false)
    @Length({max: 255})
    @Column(DataType.STRING)
    header: string;

    @AllowNull(false)
    @Column(DataType.TEXT)
    text: string;

    @HasMany(() => Post, {
        onDelete: 'CASCADE',
        hooks: true
    })
    messages: Post[];
}
