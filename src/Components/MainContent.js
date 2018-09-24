import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import GuestList from './GuestList';


const MainContent = props =>
 <div>
	<Counter 
	totalInvited={props.totalInvited}
	numberAttending={props.numberAttending}
	numberUnconfirmed={props.numberUnconfirmed}
	/>

	<GuestList guests={props.guests}
	toggleConfirmationAt={props.toggleConfirmationAt}
	toggleEditingAt={props.toggleEditingAt}
	setNameAt={props.setNameAt}
	removeGuestAt={props.removeGuestAt}
	pendingGuest={props.pendingGuest}
	/>
</div>
	
MainContent.propTypes = {
	numberAttending: PropTypes.number,
	numberUnconfirmed: PropTypes.number,
	totalInvited: PropTypes.number,
	guests: PropTypes.array.isRequired,
	toggleConfirmationAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	removeGuestAt: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired
};
	
export default MainContent;