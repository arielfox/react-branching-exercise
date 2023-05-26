import React, { useState } from 'react'
import OptionItem from './OptionItem'
import styles from './Options.module.css'


const OptionList = ({ question }) => {
    const renderedOptions = question.options.map(option =>
        <OptionItem key={option.id} option={option} question={question} />
    )
    return (
        <ul className={styles.optionList}>{renderedOptions}</ul>
    )
}

export default OptionList
