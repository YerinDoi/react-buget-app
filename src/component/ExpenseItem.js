import React, { Component } from 'react'
import './ExpenseItem.css'

export class ExpenseItem extends Component {
  render() {
    return (
      <div className='item'>
        <div className='info'>
          <span className='expense'>식비</span>
          <span className='amount'>원</span>
        </div>
        <div>
          <button className='edit-btn'>수정</button>
          <button className='clear-btn'>삭제</button>
        </div>
      </div>
    )
  }
}

export default ExpenseItem