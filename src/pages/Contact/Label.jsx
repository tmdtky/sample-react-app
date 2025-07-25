import React from 'react'

export const Label = (props) => {
	return (
		<label htmlFor={props.htmlFor} className="w-60 text-left">
			{props.text}
		</label>
	)
}