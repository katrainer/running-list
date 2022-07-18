import {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import s from './index.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
	red?: boolean
}

export const Button: FC<SuperButtonPropsType> = (
		{red, className, ...restProps}
) => {
	const finalClassName = `${red ? s.red : s.default} ${className}`

	return (
			<button
					className={finalClassName}
					{...restProps}
			/>
	)
}