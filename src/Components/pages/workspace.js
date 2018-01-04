import React, { Component } from 'react';
import firebase from 'firebase';

class Visitors extends Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDLKGA5Ko0of23whwU7llsOYIaTNOR1YXs",
        authDomain: "react-web-263d2.firebaseapp.com",
        databaseURL: "https://react-web-263d2.firebaseio.com",
        projectId: "react-web-263d2",
        storageBucket: "",
        messagingSenderId: "810328617543"
    };
    firebase.initializeApp(config);

    this.state = {
        name: '',
        date: ''
    }
  }

  componentWillMount() {
      this.firebaseRef = this.props.db.database().ref("visitors");
  }

  componentWillUnmount() {
      this.firebaseRef.off();
  }

  handleKeyEnter = (e) => {
      if (e.charCode === 13) {
          this.pushToFirebase(e);
      }
  }

  validateForm() {
      return this.state.name !== '';
  }

  pushToFirebase(event) {
    event.preventDefault();

    if(!this.validateForm()){
        alert("Please enter a name");
    }
    else{

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        this.state.date = mm + '/' + dd + '/' + yyyy;
        //this.setState({date: today})

        this.firebaseRef.child(this.state.name).set(
            {name: this.state.name, date: this.state.date}
        );
        this.setState({name: '', date: ''});
    }
  }

  render() {

    return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name 
                <input type="text" 
                    style={{marginLeft:'10px'}}
                    value={this.state.name}
                    onChange={e=>this.setState({name:e.target.value})} 
                    onKeyPress={this.handleKeyEnter.bind(this)}
                />
                    
            </label>
        </form>
        <form>
            <button onClick={this.pushToFirebase.bind(this)}>Submit</button>
        </form>
    </div>
    );
  }    
}

class DisplayData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }


    componentWillMount() {
        this.firebaseRef = this.props.db.database().ref("visitors");
        this.firebaseRef.on('value', function(dataSnapshot) {
            var items = [];
            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                items.push(item);
            }.bind(this));
            this.setState({
                items: items
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    render() {
        const items = this.state.items;
        const records = items.map((items) => 
            <tr>
                <td style={{width:'200px', textAlign: 'center'}}>{items.name}</td>
                
                <td style={{width:'200px', textAlign: 'center', 
                    borderLeft: '1px solid black'}}>{items.date}
                </td>
            </tr>
        );

        return(
            <div>
                <table>
                    <thead>
                        <th className='text-center'>Visitors</th>
                        <th className='text-center'
                            style={{borderLeft: '1px solid black'}} >Date Visited
                        </th>
                    </thead>
                    <tbody>
                        {records ? records : ''}
                    </tbody>
                </table>

            </div>
        )
    }
}

class Workspace extends Component {

  render() {

    return (
      <div className="workspace">
        <div className="jumbotron">
          <h1>Workspace</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Visitors db={firebase}/>
                </div>
                <div className="col">
                    <DisplayData db={firebase}/>
                </div>
            </div>
        </div>
        <br/>
        <p className="text-center">________________________</p>
      </div>
      
    );
  }
}

export default Workspace;
