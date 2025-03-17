import React, { Component } from 'react'
import "./App.css"
import ExpenseForm from './component/ExpenseForm'
import ExpenseList from './component/ExpenseList'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expense: [
        { id: 1, charge: "렌트비", amount: 1600 },
        { id: 2, charge: "교통비", amount: 200 },
        { id: 3, charge: "식비", amount: 1200 }
      ]
    }
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expense.filter(expense =>
      expense.id !== id
    );
    this.setState({
      expense: newExpenses
    })
  }

  render() {
    return (
      <main className='main-container'>
        <h1>예산 계산기</h1>

        <div style={{width: '100%', background: 'white', padding: '1rem' }}>
          {/* {ExpenseForm} */}
          <ExpenseForm />
        </div>

        <div style={{width: '100%', background: 'white', padding: '1rem' }}>
          {/* {ExpenseList} */}
          <ExpenseList 
            expense={this.state.expense}
            handleDelete={this.handleDelete}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'end', marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }} >
            총 지출:
            <span>원</span>
          </p>
        </div>
      </main>
    )
  }
}

export default App