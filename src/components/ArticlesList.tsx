import { Article } from "../interfaces/article";
import {useState,useEffect} from 'react'
import ArticleComponent from "./ArticleComponent";
import { Container,Row,Col } from "react-bootstrap";

export default function ArticlesList(){
    const [articles,setArticles] = useState<Article[]>([]);
    useEffect(()=>{
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(response =>{
            if(response.ok){
                return response.json()
            }else{
                throw new Error("Errore nella fetch");
            }
        })
        .then(data=>{
            setArticles(data.results)
        })
        .catch(error=>{
            console.log("errore",error)
        })
    },[])
    return (
        <Container>
            <Row className="justify-content-start d-flex gy-4">
        {
            articles.map((article)=>{
            return(
            <Col className="justify-content-center d-flex" md={4} xs={12}>
              <ArticleComponent article={article} clickable={true}/>
              </Col>)
            })
        }
            </Row>
        </Container>
        
    )

}