import React, { Component } from 'react'
//import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import Error from '../../Error'
import {ADD_MOVIES } from '../../queries/queries';
class Signup extends Component {
	constructor (props) {
		super(props)
		this.state = {
			name:'',
            gender:'',
            DOB:'',
            bio:''

		}
		this.handleChange = this.handleChange.bind(this)
		this.validateForm = this.validateForm.bind(this)
	}

	handleChange (e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	validateForm () {
		// check required inputs
		const { name, gender, DOB, bio } = this.state
		return !name || !gender || !DOB || !bio 
	}

	render () {
		const { name, gender, DOB, bio } = this.state 

		return (
			<div className="content">
				<h2>Register</h2>
				<Mutation 
					mutation={ADD_MOVIES} 
				>	
				{(addActors, { data, loading, error }) => (
					<form 
						className="form"
						onSubmit={async (e) => {
							try  {
								e.preventDefault()
								// get token from graphql server
								const {data} = await addActors({ variables: { name, gender, DOB, bio}})
						
								// reload current user data
								// await this.props.refetch()
								// // clear current state
								// this.setState({ name: '', gender: '', DOB: '', bio: ''})
								// // redirect to home page
								// this.props.history.push('/')
	
							} catch (err) {
								console.log(err)
							}
						}}
					>
						<input 
							type="text"
							value={name}
							onChange={this.handleChange}
							placeholder="Username"
							name="name"
						/>
						<input 
							type="text"
							value={DOB}
							onChange={this.handleChange}
							placeholder="DOB"
							name="DOB"
						/>
						<input 
							type="text"
							value={gender}
							onChange={this.handleChange}
							placeholder="gender"
							name="gender"
						/>
						<input 
							type="text"
							value={bio}
							onChange={this.handleChange}
							placeholder="bio"
							name="bio"
						/>
						<button 
							type="submit"
							disabled={loading || this.validateForm()}
						>
							Submit
						</button>
						{ error ? <Error message={error.message.split(':')[1]}/> : ''}
					</form>	
				)}
				</Mutation>
			</div>
		)
	}
}

export default (Signup)