import React, {useState} from 'react'
import GoalListItem from '../GoalListItem';
import '../GoalList.css'
import Container from 'react-bootstrap/Container';
import ActiveListItem from './ActiveListItem';
import Goal from './Goal';

export default function ActiveList(props) {
  const goals = props.goals
  const[state, setState] = useState(false);
  const[goalID, setGoalID] = useState(undefined);

  const handleClick = val => {
    setState(true)
    setGoalID(val);
  };

  return (
    <>
     {state === false && ( <section>
      <Container fluid style={{ textAlign: 'center' }}>

        {
          goals.map((goal) => {
            return (
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
            );
          })
        }
      </Container>
    </section>
      )}    
      
    {state === true && ( <Goal id = {goalID}/> )}
  </>
    
  );
}