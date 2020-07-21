import React from "react";

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
        }
    }

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value});
    }

   handleSubmit = event =>{
       event.preventDefault();

   }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value = {this.state.search} onChange={this.handleChange} name='search' placeholder='Enter keyword...'/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


<div class="FRC_quickBookDesktop FRC_padding20-tb">
  <div class="quickBookBody FRC_bodyColumn">
      <form id="quickbook" class="FRC_quickBookForm FRC_block" name="book" action="/booking" method="post">
        <label class="labelText">
          Quick Book<span>:</span>
        </label>
        <div class="quickBookDropsContainer">
          <div class="FRC_splitContainer">
            <div class="FRC_selectHolder FRC_splitSection FRC_split25 FRC_margin5-lr">
              <i class="fas fa-chevron-down"></i>
              <select id="quickCinema" name="sitecode" required="required">
                <option value="0" selected="selected" disabled="disabled">Choose Cinema</option>
                <option value="FRC_LND" id="London" data-thissite="FRC_LND" data-sitecode="FRC_Lime">&nbsp;London</option>
              </select>
            </div>
            <div class="FRC_selectHolder FRC_splitSection FRC_split25 FRC_margin5-lr">
              <i class="fas fa-chevron-down"></i>
              <select id="quickMovie" name="event" required="required"><option value="0" selected="selected" disabled="disabled">Choose Movie</option>
<option value="12">A Star Is Born (Bring it Back)</option>
<option value="23">Annabelle (Bring it Back)</option>
<option value="34">Beauty and The Beast (Bring it Back)</option>
<option value="45">Black Water: Abyss</option>
<option value="56">Despicable Me (Bring it Back)</option>
<option value="67">Guardians of the Galaxy (Bring it Back)</option>
<option value="78">Harry Potter And The Chamber of Secrets (Bring it Back)</option>
<option value="89">Harry Potter And The Philosopher's Stone (Bring it Back)</option>
<option value="90">Lego Movie 2, The (Bring it Back)</option>
<option value="13">Lord of the Rings - The Fellowship Of The Ring, The (Extended Edition) (Bring it Back)</option>
<option value="24">Lord Of The Rings: The Return Of The King, The (Extended Edition) (Bring it Back)</option>
<option value="35">Lord of the Rings: The Two Towers, The (Extended Edition) (Bring it Back)</option>
<option value="46">Love Sarah</option>
<option value="57">Onward (Bring it Back)</option>
<option value="68">Star Wars: Episode V - The Empire Strikes Back (Bring it Back)</option>
<option value="79">Superman: The Movie (Bring it Back)</option>
<option value="91">Trolls World Tour (Bring it Back)</option>
</select>
            </div>
            <div class="FRC_selectHolder FRC_splitSection FRC_split25 FRC_margin5-lr">
              <i class="fas fa-chevron-down"></i>
              <select id="quickDate" name="date" required="required">
                <option value="0" selected="selected" disabled="disabled">Choose Date</option>
              </select>
            </div>
            <div class="FRC_selectHolder FRC_splitSection FRC_split25 FRC_margin5-lr">
              <i class="fas fa-chevron-down"></i>
              <select id="quickTime" name="performance" required="required">
                <option value="0" selected="selected" disabled="disabled">Choose Time</option>
              </select>
            </div>
          </div>
        </div>
        <input class="formButton FRC_button FRC_buttonYellow FRC_inline" type="submit" value="Book Tickets" />
        <a href="#" id="quickBookButton" onclick="$('#quickbook').submit();return false;" class="formButton FRC_button FRC_buttonRed FRC_inline">Book Tickets</a>
      </form>
  </div>
</div>