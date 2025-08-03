import React from 'react'

export const Input = (props) => {
	return (
		<input
			type={props.type}
			id={props.id}
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			disabled={props.disabled}
			className={`border border-gray-300 rounded-lg p-4 w-full ${
				props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'
			}`}
		/>
	)
}