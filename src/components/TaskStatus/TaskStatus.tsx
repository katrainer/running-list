import {FC} from 'react'
import s from './TaskStatus.module.scss'

type TaskStatusType = {
	taskStatus: number | null
}

export const TaskStatus: FC<TaskStatusType> = ({taskStatus}) => {
	const className = () => {
		switch (taskStatus) {
			case null:
				return s.defult
			case 0:
				return s.start
			case 1:
				return s.inProgress
			case 2:
				return s.done
			case 3:
				return s.moved
			default:
				return s.default
		}
	}
	return <div className={`${s.main} ${className()}`}/>
}