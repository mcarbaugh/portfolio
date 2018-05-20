import { Record } from 'immutable';
import { Status } from '../constants/Status';

const TaskRecord = Record({
    id: 0,
    name: '',
    description: '',
    status: Status.OPEN,
});

export class Task extends TaskRecord {
    public id: number;
    public name: string;
    public description: string;
    public status: Status;
}