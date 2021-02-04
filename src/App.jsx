import React from 'react'
import './App.css'
import Result from './components/Result'

const App = () => {
    return (
        <main className='react-calculator'>
            <Result props={0}/>
            <div className="numbers">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
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