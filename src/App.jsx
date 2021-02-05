import React from 'react'
import './App.css'
import Button from './components/Button'
import Result from './components/Result'

const App = () => {

    const clickHandlerFunction = text => {
        console.log(text)
    }

    return (
        <main className='react-calculator'>
            <Result value={10}/>
            <div className="numbers">
                <Button type={1} clickHandler={clickHandlerFunction}/>
                <Button type={2} clickHandler={clickHandlerFunction}/>
                <Button type={3} clickHandler={clickHandlerFunction}/>                
                <Button type={4} clickHandler={clickHandlerFunction}/>
                <Button type={5} clickHandler={clickHandlerFunction}/>
                <Button type={6} clickHandler={clickHandlerFunction}/>
                <Button type={7} clickHandler={clickHandlerFunction}/>
                <Button type={8} clickHandler={clickHandlerFunction}/>
                <Button type={9} clickHandler={clickHandlerFunction}/>
                <Button type={0} clickHandler={clickHandlerFunction}/>
            </div>
            <div className='functions'>
                <button>Clear</button>
                <button>Redo</button>
            </div>
            <div className="math-operations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>
    )
}
export default App