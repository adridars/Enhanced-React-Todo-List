import React from "react"

function Form({
	inputTextHandler,
	inputText,
	submitHandler,
	choreFilter,
	todos,
}) {
	const hasCompleted = todos.some((todo) => todo.completed === true)
	const hasTrash = todos.some((todo) => todo.trash === true)

	return (
		<form>
			<input
				type='text'
				value={inputText}
				onChange={inputTextHandler}
				className='todo-input'
			/>
			<button
				className='todo-button'
				type='submit'
				onClick={submitHandler}
			>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select
					onChange={choreFilter}
					name='todos'
					className='filter-todo'
				>
					<option value='all'>All</option>
					{hasCompleted && (
						<option value='completed'>Completed</option>
					)}
					<option value='uncompleted'>Uncompleted</option>
					{hasTrash && <option value='trash-can'>Trash-can</option>}
				</select>
			</div>
		</form>
	)
}

export default Form
