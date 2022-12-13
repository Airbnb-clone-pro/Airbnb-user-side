import React from 'react';
import { useContext } from 'react';
import { filterContext } from '../../contexts/filtersModel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const Filters = () => {

    const { showFilters, setShowFilters } = useContext(filterContext)
    const handleCloseFilters = () => setShowFilters(false)

    return (
        <Modal show={showFilters} onHide={handleCloseFilters}
            size="lg"
            centered
        >
            <Modal.Header closeButton elementType="div" dir='ltr'>
                <Modal.Title id="contained-modal-title-vcenter" >
                    <h4 >Filters</h4>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-dark'>Show 250 Homes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Filters;
