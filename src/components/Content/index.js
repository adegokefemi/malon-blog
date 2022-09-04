import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Content.scss";
import Article from "../Article";
import EditArticle from "../EditArticle";

const Content = ({ modalOpened, closeModal, openModal }) => {
    const [articles, setArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(null);

    const baseUrl = "https://jsonplaceholder.typicode.com";
    const images = [
        "/images/post1.jpg", 
        "/images/post2.jpg", 
        "/images/post3.jpg", 
        "/images/post4.jpg", 
        "/images/post5.jpg",
    ];

    useEffect(() => {
        fetch(`${baseUrl}/posts`, { method: "GET" })
        .then(res => res.json())
        .then(res => {
            setArticles(res);
        });
    }, []);

    const onEditComplete = (article, isEditingMode = false) => {
        setActiveArticle(null);
        closeModal();
    }

    const onEditClicked = (article) => {
        setActiveArticle(article);
        openModal();
    }

    const onDeleteClicked = (id) => {
        fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => {
            console.log("Deleted!")
            setArticles((prevArticles) => prevArticles.filter(a => a.id !== id));
        });
        
    }


    return (
        <Container className="d-flex flex-column pt-4 pb-5">
            <div className="d-flex justify-content-between pb-4">
                <h2>All Articles</h2>
            </div>
            <Container className="ArticleLayout px-0">
                {
                    articles.map((article, index) => (
                        <Article 
                            key={article.id} 
                            poster={images[index % 5]} 
                            article={article}
                            onEditClicked={onEditClicked}
                            onDeleteClicked={onDeleteClicked} />
                    ))
                }
                
            </Container>
            <EditArticle show={modalOpened} handleClose={onEditComplete} data={activeArticle} />
        </Container>
    )
}

export default Content;