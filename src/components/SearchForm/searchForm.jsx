import {Form, Row, Col, Alert} from 'react-bootstrap';
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useCategories} from '../../hooks/useCategories';
import {useDrinks} from '../../hooks/useDrinks';

export default function SearchForm(){
    const { categories } = useCategories();
    const { getDrink, loading } = useDrinks();

    const initialValues = {
        name: '',
        category: ""
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('El campo nombre es obligatorio'),
        categories: Yup.string().required('Selecciona un a categoria')
    })

    const handleSubmit = (values) =>{
        getDrink(values)
    }
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

            {
                (formik) =>(
                    <Form onSubmit={formik.handleSubmit}>
                        {
                            formik.status && (
                                <Alert variant='danger' className='text-danger'>
                                    {formik.status}
                                </Alert>
                            )
                        }
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <label>
                                        <Form.label htmlFor="name">
                                            Nombre Bebida
                                        </Form.label>
                                        <Field
                                            id="name"
                                            type="text"
                                            placeholder="Ej: Tequila, Vodka, etc"
                                            name="name"
                                            as={Form.Control}
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component={Form.Text}
                                            className='text-danger'
                                        />
                                    </label>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.label htmlFor="category">
                                        Categoria Bebida
                                    </Form.label>
                                    <Field
                                    id="category"
                                    /* type="select" */
                                    name="category"
                                    as={Form.Select}
                                    placeholder="- Selecciona Categoria -"
                                    >
                                        <option disabled>- Selecciona Categoria -</option>
                                        {
                                            categories.map((category) => (
                                                <option
                                                key={category.strCategory}
                                                value={category.strCategory}
                                                >
                                                    {category.strCategory}
                                                </option>
                                            ))
                                        }
                                    </Field>
                                    <ErrorMessage
                                            name="category"
                                            component={Form.Text}
                                            className='text-danger'
                                        />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='justify-content-end'>
                            <Col md={3}> 
                                <button
                                 className='btn btn-danger text-uppercase w-100'
                                 type='submit'
                                 disabled={loading}
                                >
                                    {loading ? "Buscando..." : "Buscar Bebidas"}
                                </button>
                            </Col>
                        </Row>
                    </Form>
                )
            }

        </Formik>
    )
}