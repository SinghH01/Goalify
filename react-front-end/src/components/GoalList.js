import React from 'react'
import GoalListItem from './GoalListItem';
import './GoalList.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function GoalList(props) {
  const goals = props.goals

  return (
    <section>

      {/* <ul style={{ listStyleType: "none", }} > */}
      <Container fluid style={{ textAlign: 'center' }}>
        <Row style={{ width: "80%", marginInline: 'auto', marginTop: '30px', marginBottom: '60px' }}>
          {
            goals.map((goal) => {
              return (
                <Col xs={6} >
                  <GoalListItem
                    key={goal.id}
                    id={goal.id}
                    title={goal.title}
                    description={goal.description}
                    image={goal.image}
                    start_date={goal.start_date}
                    end_date={goal.end_date}
                    online_goal={goal.online_goal}
                  />
                </Col>
              );
            })
          }
        </Row>
      </Container>

      {/* </ul> */}
    </section>
  );
}