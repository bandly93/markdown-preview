import React, {Component} from "react";
var Marked = require("marked");

class App extends Component{
	constructor(props){
		super(props);
		this.state = {value:""}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({value : event.target.value});
	}
	render(){
		return (
			<div className = "container">
				<div className = "row">
					<div className = "col-lg-6">
						<form>
							<textarea onChange ={this.handleChange}/>
						</form>
					</div>
					<div className = "col-lg-6">
						<div className="preview" dangerouslySetInnerHTML={{__html:Marked(this.state.value)}}></div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;