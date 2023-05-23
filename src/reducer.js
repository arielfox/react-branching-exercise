const initialState = {
    questions: []
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'questions/optionSelected': {
            const questionId = action.payload.questionId
            const breadcrumb = action.payload.breadcrumb
            const optionId = action.payload.optionId
            return {
                ...state,
                questions: [
                    ...state.questions,
                    {
                        id: questionId,
                        breadcrumb: breadcrumb,
                        selectedOption: optionId,
                    }
                ]
            }
        }
        case 'questions/optionUnselected': {
            const index = state.questions.findIndex(question => question.id === action.payload);
            return {
                ...state,
                questions: [...state.questions.slice(0, index)]
            }
        }
        case 'questions/clearAllSelections': {
            return initialState
        }
        default:
            return state
    }
}
