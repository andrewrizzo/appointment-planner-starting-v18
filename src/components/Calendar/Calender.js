import React, {useState} from "react";
import "./styles.css";
import { daysInMonth, firstDayOfMonth, months } from "./date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
export default function Calender() {
  const [modalVisble, setModalVisble] = useState (false);
  const [appointmentList, setAppintmentList] = useState ([
    {
      name: "sean",
      date: Date("2024-02-10T12:00:00ET") ,// YYYY-MM-DDTHH:mm:ssET
      Address: "2443 sw cow steet",
      hostname: 'andrew'
    },
    {
      name: "max",
      date: Date("2024-03-05T1:00:00ET") ,// YYYY-MM-DDTHH:mm:ssET
      Address: "2 sw cow steet",
      hostname: 'cole'
    },
    {
      name: "dick",
      date: Date("2024-01-17T2:00:00ET") ,// YYYY-MM-DDTHH:mm:ssET
      Address: "24 sw ap steet",
      hostname: 'ken'
    },
  ]);
  console.log({appointmentList});
  return (
    <div className="container">
      <Calendar
        {...{
          setModalVisble
        }}
      />
      <Modal
        modalVisible={modalVisble}
        setModalVisible={setModalVisble}
      />
    
   </div> 
  );
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const now = new Date();
    this.state = {
      month: now.getMonth(),
      now: now,
      displayMonthSelector: false
    };
  }

  setMonth = newMonth => {
    this.setState(prevState => {
      const newNow = new Date(prevState.now);
      newNow.setMonth(newMonth);
      return {
        month: newMonth,
        now: newNow
      };
    });
  };

  monthHandler = () => {
    this.setState(prevState => ({ displayMonthSelector: true }));
  };

  selectMonthHandler = month => {
    this.setState(
      prevState => ({ displayMonthSelector: false }),
      () => this.setMonth(month)
    );
  };

  render() {
    const days = daysInMonth(this.state.month);
    return (
      <div className="calendar">
        <Header
          month={this.state.month}
          year={this.state.now.getFullYear()}
          setMonth={this.setMonth}
          monthHandler={this.monthHandler}
        />
        <WeekDays />
        <DaysOfMonth
          days={days}
          month={this.state.month}
          now={this.state.now}
          setModalVisble={this.props.setModalVisble}
        />
        {this.state.displayMonthSelector && (
          <MonthSelector
            month={this.state.month}
            selectMonthHandler={this.selectMonthHandler}
          />
        )}
      </div>
    );
  }
}

class MonthSelector extends React.Component {
  render() {
    return (
      <div className="month-selector">
        {months.map((month, i) => {
          return (
            <span
              key={month}
              onClick={() => this.props.selectMonthHandler(i)}
              className={`selectable-month ${
                i === this.props.month ? "selected-month" : ""
              }`}
            >
              {month}
            </span>
          );
        })}
      </div>
    );
  }
}

class Header extends React.Component {
  decreaseMonth = () => {
    this.props.setMonth(Math.abs((this.props.month + 12 - 1) % 12));
  };

  increaseMonth = () => {
    this.props.setMonth(Math.abs((this.props.month + 1) % 12));
  };

  render() {
    return (
      <div className="header">
        <div className="header--info">
          <span className="header--month" onClick={this.props.monthHandler}>
            {months[this.props.month]}
          </span>
          <span className="header--year">{this.props.year}</span>
        </div>
        <div className="header-icons">
          <span onClick={this.decreaseMonth}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <span onClick={this.increaseMonth}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      </div>
    );
  }
}

class WeekDays extends React.Component {
  render() {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      <div className="weekrow">
        {weekdays.map(weekday => {
          return (
            <span key={weekday} className="weekday">
              {weekday}
            </span>
          );
        })}
      </div>
    );
  }
}

class DaysOfMonth extends React.Component {
  state = {}
  render() {
    const days = Array.from({ length: this.props.days }, (k, v) => v + 1);
    const dayToBeginTheMonthFrom = firstDayOfMonth(this.props.month);
    const currentDate = this.props.now.getDate();
    const style = { gridColumnStart: dayToBeginTheMonthFrom + 1 };
     
    return days.map((day, i) => {
      return (
        <span
          key={i}
          className={`day ${i === 0 ? "first-day" : ""}
            ${day === currentDate ? "today" : ""}
            ${
              (i + dayToBeginTheMonthFrom) % 7 === 0 ||
              (i + dayToBeginTheMonthFrom) % 7 === 6
                ? "holiday"
                : ""
            }
            `}
          style={i === 0 ? style : {}}
          >
            <span>
              {day}
            </span>
            <button onClick={() => this.props.setModalVisble(true)} className="btn-modal">
              +
            </button>
        </span>
      );
    });
  }
}
