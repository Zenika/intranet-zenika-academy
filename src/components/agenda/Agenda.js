import React from 'react';

class AgendaZenika extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h1 className="title is-1 mbmd"> Agenda .</h1>
        </div>
        <article>
          <style jsx>
            {
              `
                            .googleCalendar {
                                height: 700px;
                            }
                            `
            }
          </style>
          <iframe
            id="calendar"
            className="googleCalendar"
            src="https://calendar.google.com/calendar/embed?src=youcef.messao%40gmail.com&ctz=Europe%2FParis"
            width="1800"
            frameBorder="0"
            scrolling="no"
            title="Agenda"
          />
        </article>
      </React.Fragment>
    );
  }
}

export default AgendaZenika;
