import React, { useState } from 'react'
import { questions } from './data'
import OptionList from '../options/OptionList'
import Breadcrumbs from "../breadcrumbs/Breadcrumbs"
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
import styles from '../../App.module.css'



const Question = () => {
    const { id } = useParams();
    const question = findQuestion(parseInt(id)); // Why is a string returned with useParams? All the examples seem to get integers
    const selectHistory = state => state.questions
    const history = useSelector(selectHistory)
    const dispatch = useDispatch()
    function handleResetClick() {
        dispatch({ type: 'questions/clearAllSelections' })
    }
    let content;
    if (question.options.length > 0) {
        content = (
            <section className={styles.questionSection}>
                <h2>{question.text}</h2>
                <OptionList key={question.id} question={question} />
            </section>
        );
    } else {
        content = (
            <section className={styles.questionSection}>
                <img className={styles.questionImage} src={"/images/" + question.image} alt={question.breadcrumb} />
                <h3>{question.text}</h3>
                <Link to={`/`}><button className={styles.button} onClick={handleResetClick}>Start Over</button></Link>
            </section>
        );
    }
    return (
        <div className={styles.questionContainer}>
            {history.length > 0 && <Breadcrumbs question={question} />}
            {content}
        </div>
    )
}

function findQuestion(id){
    return questions.find(question => question.id === id)
}

export default Question
