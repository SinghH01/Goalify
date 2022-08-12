import React, { useState } from 'react'
import GoalListItem from '../GoalListItem';
import '../GoalList.css'
import Container from 'react-bootstrap/Container';
import ActiveListItem from './ActiveListItem';
import Goal from './Goal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Zoom from 'react-reveal/Zoom';


export default function ActiveList(props) {
  const goals = props.goals
  const [state, setState] = useState(false);
  const [goalID, setGoalID] = useState(undefined);

  const handleClick = val => {
    setState(true)
    setGoalID(val);
  };

  return (
    <>
      {state === false && (<section>
        <Container fluid style={{ textAlign: 'center' }}>
          <Row style={{ width: "80%", marginInline: 'auto', marginTop: '30px', marginBottom: '60px' }}>
            {
              goals.map((goal) => {
                return (
                  <Col xs={6} >
                    <Zoom>
                    <ActiveListItem
                      key={goal.id}
                      id={goal.id}
                      title={goal.title}
                      description={goal.description}
                      image={goal.image}
                      start_date={goal.start_date}
                      end_date={goal.end_date}
                      online_goal={goal.online_goal}
                      handleClick={handleClick}
                    />
                    </Zoom>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </section>
      )}

      {state === true && (<Goal id={goalID} />)}
    </>

  );
}