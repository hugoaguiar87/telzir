import { Model, DataTypes} from 'sequelize';
import { sequelize } from "../instances/mysql";

export interface PlanInstance extends Model {
    id: number,
    plan: string
}

export const Plan = sequelize.define<PlanInstance>('Category', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    plan: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'plans',
    timestamps: false
})