import React, {WheelEvent, ChangeEvent, useEffect, useRef, useState} from 'react';
import s from './App.module.scss'
import {CurrentWeek} from './components/CurrentWeek/CurrentWeek';
import {Task} from './components/Task/Task';
import {storeTasks as store} from './store/tasks';
import {Button} from './components/common/Button';
import {NotepadHeader} from './components/NotepadHeader';
import { Header } from './components/Header';


export const App = () => {

	function useHorizontalScroll() {
		const elRef: any = useRef();
		useEffect(() => {
			const el = elRef.current;
			if (el) {
				const onWheel = (e:WheelEvent<HTMLDivElement>) => {
					if (e.deltaY == 0) return;
					e.preventDefault();
					el.scrollTo({
						left: el.scrollLeft + e.deltaY,
						behavior: "smooth"
					});
				};
				el.addEventListener("wheel", onWheel);
				return () => el.removeEventListener("wheel", onWheel);
			}
		}, []);
		return elRef;
	}

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
				<div ref={useHorizontalScroll()} style={{ width: 300, overflow: "auto" }}>
					<div style={{whiteSpace: 'nowrap'}}>
						aaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa
						aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa
						aaaa
					</div>
				</div>
			</div>
	)
}