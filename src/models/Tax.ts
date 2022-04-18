import { Model, DataTypes} from 'sequelize';
import { sequelize } from "../instances/mysql";

export interface TaxInstance extends Model {
    id: number,
    callFrom: string,
    callTo: string,
    price: number
}

export const Tax = sequelize.define<TaxInstance>('Tax', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    callFrom: {
        type: DataTypes.STRING
    },
    callTo: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    }
}, {
    tableName: 'tax',
    timestamps: false
})