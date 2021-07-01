import React from 'react';
import $ from "jquery";
import Header from "./Header";

interface MyState {
  resumeData: {};
}
class Top extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
    };

    // ReactGA.initialize("UA-110570651-1");
    // ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success:  (data) => {
        this.setState({ resumeData: data });
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return <Header />;
  }
}

export default Top;
