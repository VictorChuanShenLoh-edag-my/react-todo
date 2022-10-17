import React, { useEffect, useState } from 'react'

export const SearchToDo = (props: any) => {
    const [searchText, setSearchText] = useState("");
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(() => event.target.value);
    }

    useEffect(() => props.filterToDo(searchText), [searchText]);

  return (
    <div>
        <input type='search' placeholder='Search' onChange={onChangeHandler}>
        </input>

    </div>
  )
}
