import React,{Component} from 'react';
var Marked = require("marked");

class Preview extends Component {
	constructor(props){
		super(props);
		console.log(props);
	}
	render(){
		return (
			<div className = "col-lg-6">
				<div className="preview" dangerouslySetInnerHTML={{__html:Marked(this.state.value)}}></div>
			</div>
		);
	}
}

export default Preview;

				