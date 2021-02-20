function SearchInput(props)
{
    // do ogarniecia:
    // zrobic zeby text pojawial sie troche bardziej na prawo
    // dodac emotke lupy po prawej na dole
    // zrobic animacje klikania ( moze np na zmiane border-radius na 0 czy cos)
    return(
        <div className="SearchInput">
            <input className="SearchForm" placeholder="Wyszukaj..."/>
        </div>
    )
}
export default SearchInput;