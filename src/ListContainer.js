import React from 'react';
import CardList from './CardList';
import {db} from './firebase';

class ListContainer extends React.Component {
    
    state = {
        input: '',
        listItems: [],
        listId: null
    }

    onChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }

    onKeyPress = (e) => {
        const value = e.key;
        const allowed = [
            'Enter'
        ];
        if (allowed.includes(value)){
            switch(value) {
                case 'Enter' :
                    this.setState({
                        input: '',
                        listItems: [...this.state.listItems, this.state.input]
                    });
                    this.sendItemToFirebase()
                e.preventDefault()
                    break
                default :
                    this.setState({
                        input: '',
                        listItems: [...this.state.listItems, this.state.input]
                    })
                    e.preventDefault()
            }
        }
    }

    onDelete = (cardId) => {
        console.log('onDeleteClicked')
        console.log(cardId);
        console.log(this.state.listItems[cardId])
        let textToDelete = this.state.listItems[cardId]
        console.log(textToDelete)
        this.setState({
            listItems: this.state.listItems.filter(a => a !== textToDelete)
        })   
    }

    sendItemToFirebase = (state) => {
            db.collection("user-data").doc(this.props.email).set({
                listItems: this.state.listItems
            })
            .then(function() {
                console.log('Document written');
            })
    }

    componentDidMount() {
        if (this.props.email === '') {
            console.log('you need to login')
        }
        else 
        db.collection("user-data").doc(this.props.email).get().then(function(doc) {
            if(doc.exists) {
                console.log(doc.data().listItems);
            }
            else {
                console.log('no data')
            }
        }).catch(function(error) {
            console.log("Error getting document", error);
        });
    }

    render() {
        console.log(this.state)
        console.log(this.props.email);
        console.log(this.state.listItems[0])
        return (
            <div className="list-container">
                <CardList
                    cards={this.state.listItems}
                    state={this.state}
                    handleDelete={this.onDelete}
                />
                <input type="text" className="card-input" placeholder="Add another card"
                    value={this.state.input} 
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}/>
            </div>
        )
    }
}

export default ListContainer;