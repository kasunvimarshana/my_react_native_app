import React, { Component } from 'react';
import { View, Text } from 'react-native';

//import { useKeepAwake, activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class WelcomeScreen extends Component{
    
    constructor(props){
        super(props);
        //this.state = {};
        //this.myFunction = this.myFunction.bind(this);
    }
    
    componentDidMount(){
        //this.props.myAction();
    }
    
    componentWillReceiveProps(nextProps){
        //
    }
    
    render(){
        return(
            <View>
                <Text>Welcome</Text>
            </View>
        );
    }
    
}

//function mapStateToProps( state ){}
//function mapStateToProps( { dummy_reducer } ){}
//connect( mapStateToProps, actions )
//export default connect(null, actions)(WelcomeScreen);

function mapStateToProps( state ){
    return {};
}

export default connect(mapStateToProps, actions)(WelcomeScreen);