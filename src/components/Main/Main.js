import React, { Component } from 'react';
import './Main.css';

export class Main extends Component {
  info = {
    country: 'Country: USA',
    agancy: 'Distributed by: Paramaunt Picture',
    style: 'Style: comedy-drama film',
    ralease: 'Release date: 1994',
  };
  render() {
    return (
      <>
        <main>
          <article id="story">
            <h2>Story</h2>
            <p>
              Forest Gump is the most successful film directed by Robert
              Zemeckis, released in 1994. In the process, we are talking about
              an amazing person who went through a lot to finally understand who
              he is. Little Forest is raised by his mother, he not only has
              problems with his spine, but also with the suspicion that he is a
              weak-minded, vulnerable and kind boy, but his mother loves him
              very much. At school, he became friends with the girl Jenny, she
              was his acquaintance. Forest ran very fast, and when once again
              hooligans were chasing him, he accidentally ran out onto the
              football field, where coach Paul Bryant saw his speed, so Forest
              became a student. He played football in such a way that he became
              one of the best players. Forest fought in Vietnam, where he
              escaped half a platoon that was ambushed, for such a feat he was
              awarded the country's highest professional award. But his friend
              Bubbu Forest could not die. They wanted to go into business
              together after the war, catching shrimp. Gump himself gets hurt.
              For such a feat, Gump is awarded the country's highest military
              award. After being injured, he starts playing tennis, he does it
              very well and becomes the champion of an international tournament.
              In New York, Forest meets his lieutenant, who carried him out of
              an ambush. Together they started catching shrimp, on the court
              that Gump bought and became millionaires. Forest proposes to
              Jenny, she refuses, but follows him at night. He soon learns that
              he has a son, and Jenny is terminally ill. Forest and Jenny marry,
              but his wife's time is dying. Gump has one son.
            </p>
          </article>
          <article id="actors">
            <h2>Actors</h2>
            {this.props.actors.map((actor) => {
              return <p key={actor}>{actor}</p>;
            })}
          </article>
          <article id="info">
            <h2>Info</h2>
            <div>{this.info.country}</div>
            <div>{this.info.agancy}</div>
            <div>{this.info.style}</div>
            <div>{this.info.ralease}</div>
          </article>
        </main>
      </>
    );
  }
}

export default Main;
