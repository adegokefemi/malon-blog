import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditArticle = ({ show, handleClose, data }) => {
    const [article, updateArticle] = useState({});

    useEffect(() => {
        updateArticle(data || {});
    }, [data]);

    const onFieldChanged = (field) => {
        return (event) => {
            updateArticle((prev) => ({...prev, [field]: event.target.value}));
        }
    };

    const onSaveClicked = () => {
       if(data === '') {
        return;
       }

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(article),
                headers: {
                    'Content-type': 'application/json',
                },
                })
                .then((response) => response.json())
                .then((json) => console.log(json,));

        handleClose(article, !!data);
    }

    return (
        <Modal show={show} onHide={() => handleClose()}>
            <Modal.Header closeButton>
            <Modal.Title>{data ? "Edit Article" : "Add Article"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="articleTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            placeholder="Enter title" 
                            value={article.title || ""} 
                            onChange={onFieldChanged("title")} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="articleBody">
                        <Form.Label>Body</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder="Enter content" 
                            value={article.body || ""} 
                            onChange={onFieldChanged("body")} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
                Close
            </Button>
            <Button variant="warning" onClick={onSaveClicked}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default EditArticle;