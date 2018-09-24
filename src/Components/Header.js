import React from 'react';
import PropTypes from 'prop-types';

const Header = props =>
	<div>
		<form onSubmit={props.newGuestSubmitHandler}>
						<input 
						type="text" 
						value={props.pendingGuest}
						placeholder="Invite Someone" 
						onChange={props.handleNameInput}
						/>
						<button type="submit" name="submit" value="submit">Submit</button>
		</form>
			<h2>Invitees</h2>
	</div>

Header.propTypes = {
	newGuestSubmitHandler: PropTypes.func.isRequired,
	pendingGuest: PropTypes.bool,
	handleNameInput: PropTypes.func.isRequired
};
	
export default Header;