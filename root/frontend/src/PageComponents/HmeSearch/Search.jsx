import React, {Component} from 'react';
import '../../index.css';
import axios from 'axios'
import {Row } from "react-bootstrap";

import Input from './input'
import Movie from './movie'
import Details from './details'

import {api, mountURL, changeURL, fallBackURL, genreURL} from './config'

class Search extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      queryError: false,
      search: false,
      selectedMovie: [],
      select: false,
      genre: []
    }
  }


  filterResult(data){
    return {
      poster: data.poster_path,
      rating: data.vote_average,
      title: data.name ? data.name : data.title,
      genre: this.gen(data.genre_ids),
      released: data.release_date,
      lang: data.original_language,
      overview: data.overview
    }
  }

  onChange(e){
    const search = e.target.value
    const url = changeURL + `${search}&api_key=` + api
    
    if(search === ''){
      this.setState({
        movies: [],
        select: false,
        selectedMovie: []
      })
      return
    }
    axios.get(url)
      .then(res =>{
        const results = res.data.results
        if(results){
          let movs = results.map(result => {
            return this.filterResult(result)
          })
        this.setState({
          movies: movs,
          search: true,
          select: false,
          selectedMovie: []
        })
        } 
      })
      .catch(err =>{
        if(err){
          this.setState({movies: {}})
        }
      })
  }

  genre(){
    axios.get(genreURL)
      .then(res => {
        const results = res.data.genres
        this.setState({genre: results})
      })
      .catch(err => {
        if (err) {
          this.setState({
            movies: {}
          })
        }
      })
  }


  gen(genId){
    let x = []
    this.state.genre.map(samp => {
      genId.map(genre => {
        if(samp.id == genre){
          x.push(samp.name)
        }
      })
    })
    return x
  }

  componentDidMount(){
    this.genre()
    axios.get(mountURL)
      .then(res =>{
        const results = res.data.results
        if(results){
          let movs = results.map(result => {
            return this.filterResult(result)
          })
        this.setState({movies: movs})
        } 
      })
      .catch(err =>{
        if(err){
          this.setState({movies: {}})
        }
      })
  }

  clickFallback(){
    axios.get(fallBackURL)
      .then(res => {
        const results = res.data.results
        if (results) {
          let movs = results.map(result => {
            return this.filterResult(result)
          })
          this.setState({ 
            movies: movs,
            search: false })
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ movies: {}})
        }
      })
  }

  selectClick(m){
    this.setState({
      select: !this.state.select,
      selectedMovie: m
    })
  }
  render(){
    return (
      <div className="Search">
        <div>
            <Row></Row>
        </div>
        <Input 
          change={(e)=> this.onChange(e)}/>
        <div className="body">
          { this.state.select ? 
              <Details 
                movie={this.state.selectedMovie}
                selClick={(e)=>this.selectClick(e)}/> :
                <Movie 
                  movie={this.state.movies}
                  err={this.state.queryError}
                  search={this.state.search}
                  selClick={(e)=>this.selectClick(e)}
                  click={(e)=>this.clickFallback(e)}/>
          }
        </div>
        <div>
            <Row></Row>
        </div>
      </div>
  );
}
}

export default Search;