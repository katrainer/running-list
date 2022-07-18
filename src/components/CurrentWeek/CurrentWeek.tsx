export const CurrentWeek = () => {
	const date = new Date()
	const month = () => {
		const month = new Date().getMonth() + 1
		return month > 9 ? month : '0' + month
	}
	const currentWeek = `${month()}`


	return (
			<div>
				{currentWeek}
			</div>
	)
}