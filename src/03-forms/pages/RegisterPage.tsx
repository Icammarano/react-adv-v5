
import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {

	const { formData, onChange, name, email, password1, password2, resetForm, isValidEmail } = useForm({
		name: '',
		email: '',
		password1: '',
		password2: ''
	})

	
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		console.log(formData)
		
	}

	return (
		<div>
			<h1>Register Page</h1>
			
			<form noValidate onSubmit={onSubmit}>
				<input 
					type="text" 
					placeholder="Name"
					name='name'
					value={name}
					// onChange={ (ev) => onChange(ev) } // esta es la forma similar de la de abajo, en el caso de abajo se pasa directamente implicita el evento como argumento de la función
					onChange={ onChange }
					className={ `${name.trim().length <= 0 && 'has-error'}` }
				/>
				{ name.trim().length <= 0 && <span>Este campo es necesario</span> }

				<input 
					type="email" 
					placeholder="Email"
					name='email'
					value={email}
					// onChange={ (ev) => onChange(ev) }
					onChange={ onChange }
					className={ `${ !isValidEmail(email) && 'has-error' }` }
				/>
				{ !isValidEmail(email) && <span>Email no es válido</span> }

				<input 
					type="password" 
					placeholder="Password"
					name='password1'
					value={password1}
					// onChange={ (ev) => onChange(ev) }
					onChange={ onChange }
					className={ `${password1.trim().length <= 0 && 'has-error'}` }
				/>
				{ password1.trim().length <= 0 && <span>Este campo es necesario</span> }
				{ password1.trim().length <= 6 &&  password1.trim().length > 0 && <span>El password debe tener más de 6 caracteres</span> }

				<input 
					type="password" 
					placeholder="Repeat Password"
					name='password2'
					value={password2}
					// onChange={ (ev) => onChange(ev) }
					onChange={ onChange }
					className={ `${password2.trim().length <= 0 && 'has-error'}` }
				/>
				{ password2.trim().length <= 0 && <span>Este campo es necesario</span> }
				{ password2.trim().length  > 0 && password1 !== password2 && <span>El password debe tener más de 6 caracteres</span> }

				<button type="submit">Create</button>
				<button type="button" onClick={ resetForm }>Reset Form</button>

			</form>
		</div>
	)
}
