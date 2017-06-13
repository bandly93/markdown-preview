import React,{Component} from 'react';

class TextArea extends Component{
	render(){
		return (
			<div className = "col-lg-6">
				<form>
					<textarea onChange ={this.handleChange} />
				</form>
			</div>
		);
	}
}

export default TextArea;

				