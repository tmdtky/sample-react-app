import React from 'react'

export const Textarea = (props) => {
	return (
		<textarea
			id={props.id}
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			rows={8}
			className="w-full border border-gray-300 rounded-lg p-4"
		/>
	)
}