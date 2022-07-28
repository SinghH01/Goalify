import React from 'react'
import GoalListItem from './GoalListItem';


export default function GoalList(props) {

const goals = props.goals

  return (
    <section>
      <h4 >Goals</h4>
      <ul style={{ listStyleType: "none" }} >
        {
          goals.map((goal) => {
            return (
              <GoalListItem
                key={goal.id}
                title={goal.title}
                description={goal.description}
                image={goal.image}
                start_date={goal.start_date}
                end_date= {goal.end_date}
              />
            );
          })
        }
      </ul>
    </section>
  );
}