import React, { useState } from 'react'
import OptionItem from './OptionItem'


const OptionList = ({ question }) => {
    const renderedOptions = question.options.map(option =>
        <OptionItem key={option.id} option={option} />
    )

    return (
        <ul>{renderedOptions}</ul>
    )
}

export default OptionList
