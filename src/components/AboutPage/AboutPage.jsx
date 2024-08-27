import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Welcome!!
          <br /> <br /> Binge smarter, and harder with SeenIt- your movie and television show tracking buddy!
          <br /> <br />
          Easily keep track of TV Shows and Movies you’re watching (or not watching) by adding them into
          lists based on their status- Currently Watching, Completed, To Watch (for your future viewing), and Did Not Finish
          (for the ones you may -or may not- get back to).
          <br /><br /> Conquer your current and future watchlists and leave no cinemedia behind!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
