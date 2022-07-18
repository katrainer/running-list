import React, {ChangeEvent, useState} from 'react';
import s from './App.module.scss'
import {CurrentWeek} from './components/CurrentWeek/CurrentWeek';
import {Task} from './components/Task/Task';
import {storeTasks as store} from './store/tasks';
import {Button} from './components/common/Button';
import {NotepadHeader} from './components/NotepadHeader';
import { Header } from './components/header';


export const App = () => {

	const [newTaskTitle, setNewTaskTitle] = useState<string>('')

	const setNewTaskTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
	}

	const addTaskHandler = () => {
		store.addTask(newTaskTitle)
		setNewTaskTitle('')
	}


	return (
			<div className={s.wrapper}>
				<Header/>
				<div className={s.container}>
					<CurrentWeek/>
					<NotepadHeader/>
					<Task/>
					<div>
						<input type="text" value={newTaskTitle} onChange={setNewTaskTitleHandler}/>
						<Button onClick={addTaskHandler}>Добавить задачу</Button>
					</div>
				</div>

			</div>
	)
}