import React from 'react'

export const Input = (props) => {
	return (
		<input
			type={props.type}
			id={props.id}
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			className="border border-gray-300 rounded-lg p-4 w-full"
		/>
	)
}