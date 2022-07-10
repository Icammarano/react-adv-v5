import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {
	/*name  min 2 max 15 req
	email req
	password min 6
	password2 min 6 igual al password1*/

	return (
		<div>
			<h1>Register Formik Page</h1>
			<Formik
				initialValues={{
					name: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values)
				}}
				validationSchema={
					Yup.object({
						name: Yup.string().min(2, 'El nombre debe ser de 2 caracteres o mas').max(15, 'El nombre debe ser menor a 15 caracteres').required('Requerido'),
						email: Yup.string().email('Revise el formato del correo').required('Requerido'),
						password1: Yup.string().min(6, 'Mínimo 6 letras').required('Requerido'),
						password2: Yup.string().min(6, 'Mínimo 6 letras').oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden').required('Requerido')

					})
				}
			>
				{	({handleReset}) => (
					<Form>
						<MyTextInput 
							label='Nombre'
							name='name'
							placeholder='Ignacio'
						/>		
						<MyTextInput 
							label='Email'
							name='email'
							type='email'
							placeholder='ignacio@google.com'
						/>
						<MyTextInput 
							label='Password'
							name='password1'
							type='password'
							placeholder='******'
						/>
						<MyTextInput 
							label='Confirm Password'
							name='password2'
							type='password'
							placeholder='******'
						/>
						<button type="submit">Create</button>
						<button type="button" onClick={handleReset}>Reset Form</button>
					</Form>
				)

				}


			</Formik>
			
			

		</div>
	)
}
