import { Model, DataTypes} from 'sequelize';
import { sequelize } from "../instances/mysql";

export interface DddInstance extends Model {
    id: number,
    ddd: string
}

export const Ddd = sequelize.define<DddInstance>('Category', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    ddd: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'ddd',
    timestamps: false
})