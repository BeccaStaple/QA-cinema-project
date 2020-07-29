import React, {Component, Fragment} from 'react'
import Fallback from './noresult'

class Movie extends Component {
  render(){
    let movies = []
    if(this.props.err){
      movies.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if (this.props.movie.length === 0){
      movies.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if(this.props.movie){
      this.props.movie.map((m, i) => {
        return movies.push(
          <div className="movie" key={i}>
          <div className="Moviecard">
            <img className="Moviecard-img-top"
            src={`https://image.tmdb.org/t/p/w200/${m.poster}`}
            alt='123'
            onClick={()=>this.props.selClick(m)}/>
            {/* <div className='rating'>{m.rating}</div> */}
            <div className="Moviecard-body">
              <h5 className="Moviecard-title">{m.title.length > 20 ?m.title.slice(0, 25)+'...' : m.title}</h5>
              <p className="Moviecard-text">{m.genre[0]}, {m.genre[1]}</p>
            </div>
            <div></div>
          </div>
        </div>
      )
    })
  }
    return (
      <Fragment>
        <div className="bodyHead">
          <h5>{this.props.search ? 'Search Results' : 'Trending Movies'}</h5>
        </div>
        <div>
        {movies}
        </div>
      </Fragment>
    )
  }
}
export default Movie