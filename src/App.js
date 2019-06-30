import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import styled from 'styled-components'
export const Container=styled.div`
margin-left:auto;
margin-right:auto;
max-width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
`
class App extends Component {
  constructor(props){
    super(props)
    this.state={};
  }
  async componentDidMount() {
    const year=new Date().getFullYear();
    const month =new Date().getMonth();
    
  
   const response = await axios.get(`https://api.github.com/search/repositories?q=language:javascript&created:>= ${year}-${month}-01&sort=stars&order=desc`)
   console.log(response.data.items)
   this.setState({result:response.data.items})
  }
  
  render() {
    let result = this.state.result
    return (
      <Container>
            {result ? result.map((item)=>{
            return (
            <Card 
              key={item.id} 
              fullname={item.full_name} 
              ownerImage={item.owner.avatar_url}
              description={item.description}
              star={item.stargazers_count}
              url={item.url}
            />
            )
            }) : <h1>Loading</h1>}
      </Container>
    )
  }
}
export default App
