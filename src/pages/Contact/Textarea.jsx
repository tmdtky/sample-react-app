import React from 'react'

export const Textarea = (props) => {
	return (
		<textarea
			id={props.id}
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			disabled={props.disabled}
			rows={8}
			className={`w-full border border-gray-300 rounded-lg p-4 ${
				props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'
			}`}
		/>
	)
}