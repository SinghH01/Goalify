import React, {useState} from "react";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./GoalList.css"
function GoalListItem(props) {
  let styles = {
    width: '30%',
    marginBlock: '36px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999'
  };

  const [favState, setFavState] = useState(false)  

  function favButton () {
    if(favState === false) {
      console.log(props.id)
      setFavState(true)
    } else {
      setFavState(false);
    }
  }

  return (

    <Card style={styles}>
      <Card.Img variant="top" src={props.image} style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span >
            Start Date{`-${moment(props.start_date).format('MMMM Do, YYYY')}`}
          </span>
          <span>
            End Date{`-${moment(props.End_date).format('MMMM Do, YYYY')}`}
          </span>
        </ListGroup.Item>
        {/* <ListGroup.Item></ListGroup.Item> */}
        <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span >
          {favState === false && (<FavoriteBorderIcon onClick ={favButton} />)}
          {favState === true && (<FavoriteIcon onClick ={favButton}/>)}
            
          </span>
          <span>
            <Button variant="primary" style={{ width: '66px', height: '42px' }}>Join</Button>
          </span>
        </ListGroup.Item>
      </ListGroup>

    </Card >
  );
}

export default GoalListItem;