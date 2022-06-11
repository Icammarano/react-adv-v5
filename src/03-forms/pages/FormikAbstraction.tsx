
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstractation = () => {

	return (
		<div>
			<h1>Formik Abstractation</h1>
			
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={values => {
					console.log("values",values)
				}}
				validationSchema={Yup.object({
						firstName: Yup.string().max(15, 'No puede contener más de 15 caracteres').required('Requerido'),
						lastName: Yup.string().max(20, 'No puede contener más de 20 caracteres').required('Requerido'),
						email: Yup.string().email('Formato de email inválido').required('Requerido'),
						terms: Yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones"),
						jobType: Yup.string().notOneOf(['it-jr'], 'Esta opción no está permitida').required('Requerido')
					})
				}
			>
				{
					formik => (
						<Form noValidate>
							<MyTextInput 
								label="firstName" 
								name="firstName" 
								placeholder='First Name'
							/>

							<MyTextInput 
								label="lastName" 
								name="lastName" 
								placeholder='Last Name'
							/>

							<MyTextInput 
								label="Email Address" 
								name="email" 
								placeholder='Email'
								type='email'
							/>

							<MySelect label="Job Type" name="jobType">
								<option value="">Pick something</option>
								<option value="developer">Developer</option>
								<option value="designer">Designer</option>
								<option value="it-senior">IT Senior</option>
								<option value="it-jr">IT Jr.</option>
							</MySelect>

							<MyCheckbox label="Terms and Conditions" name="terms" />

							<button type='submit'>Submit</button>

						</Form>
					)
				}


			</Formik>

			
			

		</div>
	)
}



