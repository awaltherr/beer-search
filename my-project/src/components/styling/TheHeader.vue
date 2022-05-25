<template>
    <header>
        <nav>
            <h1><router-link to = '/'>BeerSearch</router-link></h1>
            <ul>
                <li><router-link to='/beers'>Find Random Beers</router-link></li>
                <li><router-link to='/support'>Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style>
header {
    width: 100%;
    height: 7rem;
    background-color: #283618;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

header a {
    text-decoration: none;
    color: #fefae0;
    display: inline-block;
    padding: 0.75rem 1.5rem;
}

 li a:hover {
    text-decoration: underline;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
    padding-right: 0.9em;
    padding-left: 0.9em;
}




</style>