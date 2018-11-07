import React from 'react'
import { title } from 'change-case'

const Input = ({ onChange, large, input }) => <input
  className={`input is-${large ? 'large' : 'normal'}`}
  placeholder='Pokemon Name or Index'
  onChange={evt => onChange(evt.target.value)}
  value={input}
/>

const Suggestion = ({ pokemon, onClick }) => <button
  className={`suggestion button is-fullwidth is-${pokemon.includes('loading') ? 'loading' : 'done'}`}
  to={`/${pokemon.split(' ')[0]}`}
  onClick={() => onClick(pokemon)}>{
    title(pokemon)
  }</button>

const Suggestions = ({ suggestions, onClick }) => <div className='suggestions'>
  {suggestions.map((pokemon, index) => <Suggestion key={`${pokemon}-${index}`} pokemon={pokemon} onClick={onClick} />)}
</div>

const Search = props => <div>
  <Input {...props} />
  <Suggestions {...props} />
</div>

export default Search
