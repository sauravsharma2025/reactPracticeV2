import { Component } from "react";
import { useLocation } from "react-router-dom";
// const ViewProfileState = () => {
//   const location = useLocation();
//   console.log("SK@", location);
//   return (
//     <>
//       <div>{location.state.id}llll</div>
//     </>
//   );
// };
class Anything extends Component {
  render() {
    const { state } = this.props.location;
    console.log("SK@", state);
    return console.log("SK@", state);
  }
}
