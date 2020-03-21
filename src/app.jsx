import React, { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)
  const [logs, setLogs] = useState([])

  const pushLog = (log) => setLogs(old => [...old, log])

  const add = (diff) => (from) => {
    let to = from + diff
    pushLog(from + ' + ' + diff + ' => ' + to)
    return to
  }
  const sub = (diff) => (from) => {
    let to = from - diff
    pushLog(from + ' - ' + diff + ' => ' + to)
    return to
  }

  const reset = () => setTotal(0)
  const updateTotal = (fct, val) => () => setTotal(fct(val))

  return (
    <div className="App">
      <h3>Total : {total}</h3>
      <button onClick={reset}>Réinitialiser</button>
      <button onClick={updateTotal(sub, 1)}>-</button>
      <button onClick={updateTotal(add, 1)}>+</button>
      <h3>Historique</h3>
      {logs.map(log => <div>&nbsp;>&nbsp;{log}</div>)}
    </div>
  );
}

export default App