import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = ({question}) => {
    const selectHistory = state => state.questions
    const history = useSelector(selectHistory)
    // console.log(history)
    const dispatch = useDispatch()

    const selections = history.map((selection) => {
        function handleBreadcrumbClick() {
            dispatch({ type: 'questions/optionUnselected', payload: selection.id })
        }

        if (selection.id !== question.id) {
            return(
                <li className={styles.breadcrumb} key={selection.id} onClick={handleBreadcrumbClick}>
                    <Link to={`/${selection.id}`}>{selection.breadcrumb}</Link>
                    {' > '}
                </li>
            )

        }


    })
    return (
        <ul className={styles.breadcrumbList}>
            {selections}
            <li className={styles.breadcrumb} key={question.id}>{question.breadcrumb}</li>
        </ul>
    )
}

export default Breadcrumbs