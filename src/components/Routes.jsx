import React from 'react'
import { Routes as Switch, Route, Navigate as Redirect } from 'react-router-dom'
import { Results } from './Results'
export const Routes = () => {
  return (
    <div className='p-4'>
      <Switch>
        <Route path="/" exact element={<Redirect replace to="/search" />} />
        <Route exact path='/search' element={<Results />} />
        <Route exact path='/images' element={<Results />} />
        <Route exact path='/news' element={<Results />} />
        <Route exact path='/videos' element={<Results />} />
      </Switch>
    </div>
  )
}
