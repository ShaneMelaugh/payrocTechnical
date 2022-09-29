import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import { Recipie } from './App';

const Recipies = (props: any) => {

    return (
            props.recipie.map((recipie: Recipie) => {
                return (
                    <Modal key={recipie.strArea} isOpen={props.modal} toggle={props.closeModal}>
                    <ModalHeader toggle={props.closeModal}>{recipie.strMeal}</ModalHeader>
                    <ModalBody>
                        <p>Country of Origin: {recipie.strArea}</p>
                        <p>Category: {recipie.strCategory}</p>
                        <h3>Ingredients</h3>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>{recipie.strIngredient1}</td><td>{recipie.strMeasure1}</td></tr>
                                <tr><td>{recipie.strIngredient2}</td><td>{recipie.strMeasure2}</td></tr>
                                <tr><td>{recipie.strIngredient3}</td><td>{recipie.strMeasure3}</td></tr>
                                <tr><td>{recipie.strIngredient4}</td><td>{recipie.strMeasure4}</td></tr>
                                <tr><td>{recipie.strIngredient5}</td><td>{recipie.strMeasure5}</td></tr>
                                <tr><td>{recipie.strIngredient6}</td><td>{recipie.strMeasure6}</td></tr>
                                <tr><td>{recipie.strIngredient7}</td><td>{recipie.strMeasure7}</td></tr>
                                <tr><td>{recipie.strIngredient8}</td><td>{recipie.strMeasure8}</td></tr>
                                <tr><td>{recipie.strIngredient9}</td><td>{recipie.strMeasure9}</td></tr>
                                <tr><td>{recipie.strIngredient10}</td><td>{recipie.strMeasure10}</td></tr>
                                <tr><td>{recipie.strIngredient11}</td><td>{recipie.strMeasure11}</td></tr>
                                <tr><td>{recipie.strIngredient12}</td><td>{recipie.strMeasure12}</td></tr>
                                <tr><td>{recipie.strIngredient13}</td><td>{recipie.strMeasure13}</td></tr>
                                <tr><td>{recipie.strIngredient14}</td><td>{recipie.strMeasure14}</td></tr>
                                <tr><td>{recipie.strIngredient15}</td><td>{recipie.strMeasure15}</td></tr>
                                <tr><td>{recipie.strIngredient16}</td><td>{recipie.strMeasure16}</td></tr>
                            </tbody>
                        </Table>
                        <p>{recipie.strInstructions}</p>
                        <a href={recipie.strSource}>View Recipie source</a>
                        {/* <iframe src={recipie.strYoutube}></iframe>                     */}
                        </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={props.closeModal}>
                        Close
                      </Button>
                    </ModalFooter>
                  </Modal>
                )
            })
    )
}

export default Recipies;