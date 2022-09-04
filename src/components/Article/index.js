import React from "react";
import { Card, Button } from "react-bootstrap";

const Article = ({ poster, article, onEditClicked, onDeleteClicked }) => {
    return (
        <Card className="w-100">
            <Card.Img variant="top" src={poster} />
            <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                    {article.body}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white d-flex justify-content-around py-3">
                <Button variant="primary px-md-4 py-1" onClick={() => onEditClicked(article)}>Edit</Button>
                <Button variant="danger px-md-4 py-1" onClick={() => onDeleteClicked(article)}>Delete</Button>
            </Card.Footer>
        </Card>
    )
};

export default Article;