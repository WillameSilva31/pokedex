import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar";
import PokemonCard from "../../components/card";
import { Container, Grid, Skeleton } from "@mui/material";
import axios from "axios";
import { FunctionsSharp } from "@mui/icons-material";
import { Skeletons } from "../../components/skeletons";


function Home (){
    const [pokemons, setPokemons] = useState([])
    useEffect(()=> {
        getPokemons()
    },[])

    function getPokemons() {
        let endpoints = [];
        for(let i = 1 ; i < 152 ; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }

        let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
        return response

    }

    function filter(name) {
        const filteredPokemons = []
        if(name ===''){
            getPokemons()
        }
        for( let i in pokemons) {
            if(pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }
    
    return(
        <div>
            <SearchBar filter={filter}/>
            <Container maxWidth='false'>
                <Grid container spacing={2}>
                    {pokemons.length === 0 ? (<Skeletons/>) : (
                        pokemons.map((pokemon, key)=>(
                            <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon}>
                            <PokemonCard name={pokemon.data.name} image = {pokemon.data.sprites.front_default} types={pokemon.data.types}/>
                            </Grid>
                        ))
                    )}
                    
                </Grid>
            </Container>
        </div>
    )
}

export default Home;