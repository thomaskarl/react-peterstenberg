import React from 'react';


export default class ContactForm extends React.Component {
	render() {
		return (
			<div id={'contact-form-container'} className='contact-form-container'>

				<div className={'contact-form'}>
					<form>
						<div className={'input-container'}>
							<input type='text' name='name' ref='name' placeholder='FULL NAME*'/>
							<input type='email' name='email' ref='email' placeholder='E-MAIL*'/>
							<input type='tel' name='phone' ref='phone' placeholder='PHONENUMBER'/>
							<label htmlFor="message">MESSAGE*</label>
							<textarea name='message' ref='message'/>
						</div>
						<p className={'info-field'}>FIELDS WITH * ARE MANDATORY</p>
						<button className={'submit'} type='button'>Send</button>
						<br/><br/>
					</form>
				</div>

			</div>
		)
	}
}
