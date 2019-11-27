import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = ({data}) => (
  <Layout>
  
    <article>
      <div className="cf pa2">
        {data.pokedex.pokemons.map(pokemon =>
          <div key={pokemon.id} className="">
            <a href={`/pokemon/${pokemon.name}`} className="">
              <img style={{maxHeight: '150px'}} src={pokemon.image} alt={pokemon.name} className=""/>
              <dl className="">
                <dt className="">Name</dt>
                <dd className="">{pokemon.name}</dd>
              </dl>
            </a>
          </div>
        )}
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    pokedex {
      pokemons(first: 1000) {
        name, id, image
      }
    }
  }
`

export default IndexPage