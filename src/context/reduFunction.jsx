import React from 'react'

function reduFunction(state , action) {

  switch(action.type){

        case "add":
            return [...state , action.product]



        default:
        return state

  }
}

export default reduFunction