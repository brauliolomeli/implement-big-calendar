import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from './events';
import CustomToolbar from './custom-views/CustomToolbar';

BigCalendar.momentLocalizer(moment);

class App extends Component {
  static getClassName = (event, start, end, isSelected) => {
    let className = 'text-event';
    switch (event.type){
      case 'follow-up':
        className += ' text-event-fu';
      break;
      case 'interview':
        className += ' text-event-interview';
      break;
      default:
      break;
    }
    return {'className': className};
  }
  render() {
    const allowedViews = ["month"] //["month", "week", "work_week", "day", "agenda"];
    const components = {
      toolbar: CustomToolbar,
    }
    return (
      <div className="calendar-container">
        <BigCalendar
          {...this.props}
          events={events}
          views={allowedViews}
          defaultDate={new Date(2015, 3, 1)}
          popup={true}
          components={components}
          eventPropGetter={App.getClassName}
        />
      </div>
    );
  }
}

export default App;
