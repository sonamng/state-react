





import React,{Component} from 'react';
class App extends Component{
  constructor(){
    super();
    this.state={
      data:"roshan"
    }
  }
  apple(){
    this.setState({data:"anjali"})
  }
  render(){
    return(
      <div className='App'>
        <h1>Hello {this.state.data}</h1>
        <button onClick={()=>this.apple()}>button</button>
      </div>
    )
  }
}
export default App;







