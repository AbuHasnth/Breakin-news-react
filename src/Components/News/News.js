import React, {useState, useEffect} from 'react';
import { Button,Card } from 'react-bootstrap';

const News = (props) => {
//  console.log(props.article)
 const [data, setData] = useState({})
 useEffect(() => {
  if (props.article) {
    setData(props.article)
  }
 }, [])
 const {title, author} = data
 console.log(title,author)
//  if(props.article === []) {
//    console.log("break")
//  }
//  else {
//    console.log(props.article.author)
//  }
//  const {title, author} = props.articles;
//  console.log(props.articles.title)

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {data.author}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
    );
};

export default News;