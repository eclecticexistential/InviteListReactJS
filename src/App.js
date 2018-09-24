import React, { Component } from "react";
import Header from './Components/Header';
import MainContent from './Components/MainContent';

class App extends Component {
	state={
		pendingGuest: "",
		guests: [
		{
			name: 'Treasure',
			isConfirmed: false,
			isEditing: false
		},
		{
			name: 'Nic',
			isConfirmed: true,
			isEditing: true
		}
		]
	}
	
	toggleGuestPropAt = (property, indexToChange) => 
		this.setState({
			guests: this.state.guests.map((guest, index) =>{
				if(index===indexToChange){
					return{
						...guest,
						[property]: !guest[property]
					};
				}
				return guest;
			})
		});
		
	toggleConfirmationAt = index =>
	this.toggleGuestPropAt("isConfirmed", index);
	
	removeGuestAt = index =>
		this.setState({
			guests: [
			...this.state.guests.slice(0, index),
			...this.state.guests.slice(index + 1)
			]
		});
	
	toggleEditingAt = index =>
	this.toggleGuestPropAt("isEditing", index);
	
	setNameAt = (name, indexToChange) => 
		this.setState({
			guests: this.state.guests.map((guest, index) =>{
				if(index===indexToChange){
					return{
						...guest,
						name
					};
				}
				return guest;
			})
		});
	
	handleNameInput = e => this.setState({pendingGuest: e.target.value});
	newGuestSubmitHandler = e => {
		e.preventDefault();
		this.setState({
			guests: [
			{
				name:this.state.pendingGuest,
				isConfirmed: false,
				isEditing: false
			},
			...this.state.guests
			],
			pendingGuest: ''
		});
	}
	
	getTotalInvited = () => this.state.guests.length;
	getAttendingGuests = () => this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1 : total,
	0);
	
	render() {
		const totalInvited = this.getTotalInvited();
		const numberAttending = this.getAttendingGuests();
		const numberUnconfirmed = totalInvited - numberAttending;
		const newGuestSubmitHandler = this.newGuestSubmitHandler;
		const pendingGuest = this.pendingGuest;
		const handleNameInput = this.handleNameInput;
		return (
		<div>
			<h1>Hii!</h1>
			<Header 
			newGuestSubmitHandler ={newGuestSubmitHandler}
			pendingGuest = {pendingGuest}
			handleNameInput = {handleNameInput}
			/>
			
			<MainContent
			totalInvited={totalInvited}
			numberAttending={numberAttending}
			numberUnconfirmed={numberUnconfirmed}
			guests={this.state.guests}
			toggleConfirmationAt={this.toggleConfirmationAt}
			toggleEditingAt={this.toggleEditingAt}
			setNameAt={this.setNameAt}
			removeGuestAt={this.removeGuestAt}
			pendingGuest={this.state.pendingGuest}
			/>
			
		</div>
		);
	}
}

export default App;


















