import * as Yup from 'yup'

export const initialValues = () => {
  return {
    search: ''
  }
}
export const validationSchema = () => {
  return Yup.object({
    search: Yup.string().required('The field cannot be empty')
  })
}