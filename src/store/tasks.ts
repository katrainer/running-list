import {makeAutoObservable} from 'mobx';
import {v1} from 'uuid';

export const storeTasks: StoreTasksType = makeAutoObservable({
	tasks: [
		{
			id: v1(), title: 'firstTask', priorityLevel: 1, dailyStatus: {
				monday: 0,
				tuesday: 1,
				wednesday: 1,
				thursday: 1,
				friday: 2,
				saturday: null,
				sunday: null,
			}, description: null, color: null
		},
		{
			id: v1(), title: 'secondTask', priorityLevel: 2, dailyStatus: {
				monday: 0,
				tuesday: 1,
				wednesday: 2,
				thursday: null,
				friday: null,
				saturday: null,
				sunday: null,
			}, description: null, color: null
		},
		{
			id: v1(), title: 'thirdTask', priorityLevel: 3, dailyStatus: {
				monday: null,
				tuesday: null,
				wednesday: 2,
				thursday: null,
				friday: null,
				saturday: null,
				sunday: null,
			}, description: null, color: null
		},
		{
			id: v1(), title: 'fourthTask', priorityLevel: 1, dailyStatus: {
				monday: null,
				tuesday: null,
				wednesday: null,
				thursday: null,
				friday: null,
				saturday: null,
				sunday: null,
			}, description: null, color: null
		},
		{
			id: v1(), title: 'fifthTask', priorityLevel: 2, dailyStatus: {
				monday: 0,
				tuesday: 0,
				wednesday: 2,
				thursday: 0,
				friday: 0,
				saturday: 0,
				sunday: 0,
			}, description: null, color: null
		},
		{
			id: v1(), title: 'sixthTask', priorityLevel: 3, dailyStatus: {
				monday: null,
				tuesday: null,
				wednesday: 0,
				thursday: 3,
				friday: 3,
				saturday: 0,
				sunday: null,
			}, description: null, color: null
		},
	] as TaskType[],
	addTask(title: string) {
		this.tasks.push({
			id: v1(), title, priorityLevel: 2, dailyStatus: {
				monday: 0,
				tuesday: 1,
				wednesday: 1,
				thursday: 1,
				friday: 1,
				saturday: 2,
				sunday: null,
			}, description: null, color: null
		})
		this.tasks.sort((a, b) => a.priorityLevel > b.priorityLevel ? 1 : -1)
	},
	removeTask(id: string) {
		const i = this.tasks.indexOf(this.tasks.find(t => t.id === id)!)
		this.tasks.splice(i, 1)
	},
	updateTaskTitle(id: string, title: string) {
		const task = this.tasks.find(t => t.id === id)!
		task.title = title
	}
})

type StoreTasksType = {
	tasks: TaskType[]
	addTask: (title: string) => void
	removeTask: (id: string) => void
	updateTaskTitle: (id: string, title: string) => void
}

export type TaskType = {
	id: string
	title: string
	priorityLevel: 1 | 2 | 3
	dailyStatus: DailyStatusType
	color: null | string
	description: null | string
}

type DailyStatusType = {
	monday: TaskStatusType
	tuesday: TaskStatusType
	wednesday: TaskStatusType
	thursday: TaskStatusType
	friday: TaskStatusType
	saturday: TaskStatusType
	sunday: TaskStatusType
}
// null - не назначен день, 0 - назначенный день, 1 - процесс выполнения, 2 - завершена, 3 - перенесена
type TaskStatusType = null | 0 | 1 | 2 | 3