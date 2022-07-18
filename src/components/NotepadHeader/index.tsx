import s from './index.module.scss';
import React from 'react';

export const NotepadHeader = () => {
	return (
			<div className={s.wrapper}>
				<div className={s.daysContainer}>
					<span>Пн</span>
					<span>Вт</span>
					<span>Ср</span>
					<span>Чт</span>
					<span>Пт</span>
					<span>Сб</span>
					<span>ВС</span>
				</div>
				<div>Задачи</div>
			</div>
	)
}