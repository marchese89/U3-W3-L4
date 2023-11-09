import { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent";
import { Article } from "../interfaces/article";
import {useParams} from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap";

export default function ArticleDetails(){

    const [article,setArticle] = useState<Article|null>(null);
    const { id } = useParams();
    useEffect(()=>{
        fetch('https://api.spaceflightnewsapi.net/v4/articles/'+id)
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Errore nella fetch");
            }
        })
        .then(data=>{
            setArticle(data)
        })
        .catch(error=>{
            console.log("errore",error)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        <Container>
            <Row className="justify-content-center text-center">
                <Col md={6}>
                <h2>Dettagli Articolo</h2>
        <ArticleComponent article={article} clickable={false}/>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}