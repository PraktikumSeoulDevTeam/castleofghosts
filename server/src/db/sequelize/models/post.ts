/* eslint-disable import/no-cycle */
import {Table, Column, Model, DataType, BelongsTo, ForeignKey, Scopes, AllowNull} from 'sequelize-typescript';

import {Topic} from './topic';
import {User} from './user';

@Scopes(() => ({
    user: {
        include: [
            {
                model: User.scope('core')
            }
        ],
        attributes: {
            exclude: ['userId', 'topicId']
        }
    }
}))
@Table
export class Post extends Model {
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Topic)
    @Column(DataType.INTEGER)
    topicId: number;

    @BelongsTo(() => Topic)
    topic: Topic;

    @Column(DataType.INTEGER)
    replyId?: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    text: string;
}
