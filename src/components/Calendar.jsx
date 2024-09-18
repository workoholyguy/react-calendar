import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      Testing the calendar component
      <table>
        <th>""</th>
        <th>"Sunday"</th>
        <th>"Monday"</th>
        <th>"Tuesday"</th>
        <th>"Wednesday"</th>
        <th>"Thursday"</th>
        <th>"Friday"</th>
        <th>"Saturday"</th>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event="Fancy Dinner🏮" color="green" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <Event event="Starbucks ☕️" color="red" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <Event event="Budget Meeting 💰" color="olive" />
            <td></td>
            <Event event="Yolk 🍳" color="green" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event event="Training Session 📚" color="navy" />
            <td></td>
            <td></td>
            <Event event="Team Building 🏆" color="gold" />
            <td></td>
            <td></td>
            <Event event="Holiday Party 🎉" color="silver" />
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event event="Marketing Presentation 📊" color="teal" />
            <td></td>
            <td></td>
            <Event event="Sprint Planning 🗓️" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event event="Product Launch 🚀" color="yellow" />
            <td></td>
            <Event event="Design Workshop 🎨" color="pink" />
            <td></td>
            <Event event="Code Review 📝" color="purple" />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Coffee Break ☕" color="brown" />
            <td></td>
            <td></td>
            <Event event="Lunch with Client 🍽️" color="orange" />
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Project Deadline ⏰" color="red" />

            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Subway 🚊" color="pink" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="blue" />
            <td></td>
            <Event event="Customer Call 📞" color="maroon" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
