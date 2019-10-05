import React from "react";
import { Element } from "react-scroll";

import "./Code.scss";

const Project = ({ name, link, children }) => (
  <div className="project">
    <h2 className="pointer-events" onClick={() => window.open(link)}>
      {name}
    </h2>
    <p>{children}</p>
  </div>
);

const Code = () => (
  <Element className="section-container code" name="code">
    <h1>Code</h1>
    <p>Click the title of each project to view its repository.</p>
    <Project name="Sesh" link="https://github.com/alexichristakis/sesh">
      Independent app built over the Summer of 2018. Goal is to encourage more
      spontaneous meetups within friend groups. Users can quickly share their
      location and activity with a group of friends as an open invitation for
      others to join them. Events can also be scheduled in advance.
    </Project>
    <Project name="Evently" link="https://github.com/evently-app">
      Class project for Software Engineering. We aggregate multiple event
      service APIs and feed them to our front-end app built in React Native to
      deliver a better discovery experience than other solutions. Evently
      constructs a queue of likely event matches for a given user based on their
      preferences and geolocation, and allows them to swipe through them using
      an interface similiar to Tinder or Bumble. Users can also filter events by
      their start time or category. Events the user likes are then stored in a
      timeline for later exploration. Functionality is given that allows the
      user to save events directly to their native calendar.
    </Project>
    <Project
      name="Twitterlytics"
      link="https://github.com/alexichristakis/project-bertha"
    >
      Class project for Compoutational Linguistics that allows the user to input
      a Twitter handle to see detailed analytics on that account's tweet
      sentiment and topic predominance over time. The top 5 most negative and
      positive tweets are listed. The user can also request a specific number of
      tweets to be analyzed.
      <p
        className="pointer-events"
        onClick={() => window.open("https://bertha-ecf12.firebaseapp.com/")}
      >
        Currently hosted here.
      </p>
    </Project>
    <Project name="Hubble" link="https://github.com/alexichristakis/hubble">
      Zillow Hackweek project designed to surface aggregated geographic housing
      data and provide a powerful visualization tool for urban planners and
      researchers.
    </Project>
    <Project
      name="This Website"
      link="https://github.com/alexichristakis/personal-site"
    >
      Work in progress.
    </Project>
    <Project name="Sandbox" link="https://github.com/sandbox-co/website">
      Sandbox's presentational website.
    </Project>
  </Element>
);

export default Code;
