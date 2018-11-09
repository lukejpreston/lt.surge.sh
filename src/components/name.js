import React from 'react'

const Name = ({ name, index, type }) => {
  name = name.toLowerCase()

  const names = name.split('-')
    .map(n => {
      return {
        head: n[0].toUpperCase(),
        tail: n.slice(1, n.length)
      }
    })

  return <div key={name} className={`name luckiest is-${type}`}>
    <span className='name-index'>{index}</span>
    {
      names.map(n => <span key={`${n.head}${n.tail}`}>
        <span className='name-head'>{n.head}</span>
        <span className='name-tail'>{n.tail}</span>
      </span>)
    }
  </div>
}

export default Name
