import React from 'react'

export const FormGroup = (props) => {
	return (
		<div className="flex items-center mb-6 gap-6">
			{props.children}
		</div>
	)
}