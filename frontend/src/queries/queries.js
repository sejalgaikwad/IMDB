// import gql from 'graphql-tag'

// export const SIGNUP_USER = gql`
// 	mutation register($name: String!, $email: String!, $password: String!) {
// 		register (name: $name, email: $email, password: $password) {
//             message
//             token
// 		}
// 	}
// `

// export const SIGNIN_USER = gql`
// 	mutation login( $email: String!, $password: String!) {
// 		login( email: $email, password: $password) {
//             message
//             token
// 		}
// 	}
// `
import gql from 'graphql-tag'

// export const SIGNUP_USER = gql`
// 	mutation signupUser($username: String!, $email: String!, $password: String!) {
// 		signupUser (username: $username, email: $email, password: $password) {
// 			token
// 		}
// 	}
// `

// export const SIGNIN_USER = gql`
// 	mutation signinUser($username: String!, $password: String!) {
// 		signinUser (username: $username, password: $password) {
// 			token
// 		}
// 	}
// `

export const ADD_MOVIES = gql`
	mutation addActors( $name:String!,  $gender:String!, $DOB:String! $bio:String!){
	addActors (name:$name, gender:$gender, DOB:$DOB, bio:$bio ) {
			{	message
			
		}
	}
`
