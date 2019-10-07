// import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import {compose} from "recompose" 
// import { gql } from 'apollo-boost';

// import { Button } from 'semantic-ui-react';



// class Register extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         name:'',
//         email:'',
//         password:''
//     };
// }

// submitForm(e){
//   e.preventDefault()
//   // use the addMoviesMutation
//   this.props.REGISTER_USER({
//       variables: {
//           name: this.state.name,
//           email:this.state.email,
//           password:this.state.password,
          
//      },
//      // refetchQueries: [{ query: getBooksQuery }]
//   });
// }
//   render() {

//     return (
//             <div >
//                 <h1>Register</h1>
//                 <form id="addUser" onSubmit={ this.submitForm.bind(this) }>
//                   <div>
//                     <label>Name:</label>
//                     <input type="text"  onChange={ (e) => this.setState({ name: e.target.value }) }></input>
//                   </div>
//                   <div>
//                     <label>Email:</label>
//                     <input type="text"  onChange={ (e) => this.setState({ email: e.target.value }) }></input>
//                   </div>
//                   <div>
//                     <label>Password:</label>
//                     <input type="text"   onChange={ (e) => this.setState({ password: e.target.value }) }></input>
//                   </div>  
//                     <Button>Submit</Button>
//                 </form>
                
//             </div>
//          );
//   }
// }
//   const REGISTER_USER = gql`
//     mutation register(
//       $name: String!
//       $email: String!
//       $password: String!
     
//     ) {
//       register(
//         registerInput: {
//           name: $name
//           email: $email
//           password: $password
       
//         }
//       ) {
//       message
//       }
//     }
//   `;


// //export default {REGISTER_USER},Register;

// export default compose ( graphql(REGISTER_USER, { name: "REGISTER_USER" })) (Register);


// // import React, { useState } from 'react';
// // import { Button, Form } from 'semantic-ui-react';
// // import { useMutation } from '@apollo/react-hooks';
// // import gql from 'graphql-tag';

// // import { useForm } from '../util/hooks';

// // function Register(props) {
// //   const [errors, setErrors] = useState({});

// //   const { onChange, onSubmit, values } = useForm(registerUser, {
// //     username: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: ''
// //   });

// //   const [addUser, { loading }] = useMutation(REGISTER_USER, {
// //     update(_, result) {
// //       props.history.push('/');
// //     },
// //     onError(err) {
// //       setErrors(err.graphQLErrors[0].extensions.exception.errors);
// //     },
// //     variables: values
// //   });

// //   function registerUser() {
// //     addUser();
// //   }

// //   return (
// //     <div className="form-container">
// //       <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
// //         <h1>Register</h1>
// //         <Form.Input
// //           label="Username"
// //           placeholder="Username.."
// //           name="username"
// //           type="text"
// //           value={values.username}
// //           error={errors.username ? true : false}
// //           onChange={onChange}
// //         />
// //         <Form.Input
// //           label="Email"
// //           placeholder="Email.."
// //           name="email"
// //           type="email"
// //           value={values.email}
// //           error={errors.email ? true : false}
// //           onChange={onChange}
// //         />
// //         <Form.Input
// //           label="Password"
// //           placeholder="Password.."
// //           name="password"
// //           type="password"
// //           value={values.password}
// //           error={errors.password ? true : false}
// //           onChange={onChange}
// //         />
// //         <Form.Input
// //           label="Confirm Password"
// //           placeholder="Confirm Password.."
// //           name="confirmPassword"
// //           type="password"
// //           value={values.confirmPassword}
// //           error={errors.confirmPassword ? true : false}
// //           onChange={onChange}
// //         />
// //         <Button type="submit" primary>
// //           Register
// //         </Button>
// //       </Form>
// //       {Object.keys(errors).length > 0 && (
// //         <div className="ui error message">
// //           <ul className="list">
// //             {Object.values(errors).map((value) => (
// //               <li key={value}>{value}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // const REGISTER_USER = gql`
// //   mutation register(
// //     $username: String!
// //     $email: String!
// //     $password: String!
// //     $confirmPassword: String!
// //   ) {
// //     register(
// //       registerInput: {
// //         username: $username
// //         email: $email
// //         password: $password
// //         confirmPassword: $confirmPassword
// //       }
// //     ) {
// //       id
// //       email
// //       username
// //       createdAt
// //       token
// //     }
// //   }
// // `;

// // export default Register;





// import React, { Component } from 'react'
// //import { withRouter } from 'react-router-dom'
// import { SIGNUP_USER } from '../queries/queries'
// import { Mutation } from 'react-apollo'
// import Error from '../Error'


// class Signup extends Component {
// 	constructor (props) {
// 		super(props)
// 		this.state = {
// 			name: '',
// 			email: '',
// 			password: '',
// 			password2: ''
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 		this.validateForm = this.validateForm.bind(this)
// 	}

// 	handleChange (e) {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	validateForm () {
// 		// check required inputs
// 		const { name, email, password, password2 } = this.state
// 		return !name || !email || !password || !password2 || (password2 !== password)
// 	}

// 	render () {
// 		const { name, email, password, password2 } = this.state 

// 		return (
// 			<div className="content">
// 				<h2>Register</h2>
// 				<Mutation 
// 					mutation={SIGNUP_USER} 
// 				>	
// 				{(signupUser, { data, loading, error }) => (
// 					<form 
// 						className="form"
// 						onSubmit={async (e) => {
// 							try  {
// 								e.preventDefault()
// 								// get token from graphql server
// 								const {data} = await signupUser({ variables: { name, password, email }})
// 								// save token to local storage
// 								localStorage.setItem('token', data.signupUser.token)
// 								// reload current user data
// 								await this.props.refetch()
// 								// clear current state
// 								this.setState({ email: '', password: '', password2: '', name: ''})
// 								// redirect to home page
// 								this.props.history.push('/')
	
// 							} catch (err) {
// 								console.log(err)
// 							}
// 						}}
// 					>
// 						<input 
// 							type="text"
// 							value={name}
// 							onChange={this.handleChange}
// 							placeholder="name"
// 							name="name"
// 						/>
// 						<input 
// 							type="text"
// 							value={email}
// 							onChange={this.handleChange}
// 							placeholder="Email"
// 							name="email"
// 						/>
// 						<input 
// 							type="password"
// 							value={password}
// 							onChange={this.handleChange}
// 							placeholder="Password"
// 							name="password"
// 						/>
// 						<input 
// 							type="password"
// 							value={password2}
// 							onChange={this.handleChange}
// 							placeholder="Repeat password"
// 							name="password2"
// 						/>
// 						<button 
// 							type="submit"
// 							disabled={loading || this.validateForm()}
// 						>
// 							Submit
// 						</button>
// 						{ error ? <Error message={error.message.split(':')[1]}/> : ''}
// 					</form>	
// 				)}
// 				</Mutation>
// 			</div>
// 		)
// 	}
// }

// export default Signup;



