import React from 'react'
import GoalListItem from './GoalListItem';
import './GoalList.css'
import Container from 'react-bootstrap/Container';

export default function GoalList(props) {
  const goals = props.goals

  return (
    <section>

      {/* <ul style={{ listStyleType: "none", }} > */}
      <Container fluid style={{ textAlign: 'center' }}>

        {
          goals.map((goal) => {
            return (
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
            );
          })
        }
      </Container>

      {/* </ul> */}
    </section>
  );
}