import React from 'react';

class AgendaZenika extends React.Component {
  render() {
    return (
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
    );
  }
}

export default AgendaZenika;
