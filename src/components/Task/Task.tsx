import s from './Task.module.scss';
import {TaskStatus} from '../TaskStatus/TaskStatus';
import React from 'react';
import {storeTasks as store, TaskType} from '../../store/tasks';
import {observer} from 'mobx-react-lite';
import {Button} from '../common/Button';

export const Task = observer(() => {

	const tasks: TaskType[] = store.tasks

	const removeTaskHandler = (id: string) => {
		store.removeTask(id)
	}

	return (<div className={s.wrapper}>
				{tasks.map(t => <div key={t.id} className={s.container}>

					<div className={s.taskStatusContainer}>
						{Object.entries(t.dailyStatus).map(([key, value]) => <TaskStatus taskStatus={value} key={key}/>)}
					</div>

					{t.title}

					{t.priorityLevel}

					<Button>редактировать</Button>
					<Button onClick={() => removeTaskHandler(t.id)}>удалить</Button>
				</div>)}
			</div>
	)
})