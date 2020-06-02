import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MentalHealthCategory extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mentalconditions: [],
  //     isLoading: true,
  //     errors: null,
  //   };
  // }

  // async componentDidMount() {
  //   const url =
  //     "https://evening-mesa-59655.herokuapp.com/api/mental-conditions";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({
  //     mentalconditions: data.data,
  //     isLoading: false,
  //   });
  // }

  render() {
    const { isLoading, mentalconditions } = this.props;
    return (
      <div className="container" style={{ padding: "100px 16px" }}>
        <div className="col-md-9 mt-3 mb-3 mx-auto">
          <h1 className="h3  text-center font-weight-normal">
            Select Test Type
          </h1>

          <p className="text-center">
            Select the mental health test to see if you may benefit from further
            diagnosis and treatment from a mental heath professional
          </p>

          <div className="row" style={{}} align="center">
            {!isLoading ? (
              mentalconditions.map((mentalcondition) => {
                const { condition, slug } = mentalcondition;
                return (
                  <Link
                    to={{
                      pathname: "/mentaltest",
                      category: {
                        condition: { condition },
                        slug: { slug },
                      },
                    }}
                    key={slug}
                    style={{ textDecoration: "none", flex: "auto" }}
                  >
                    <div
                      className="card mb-2 mr-2 ml-2"
                      style={{ minWidth: 400 }}
                    >
                      <div className="card-body text-center">
                        <h5 className="card-title">{condition} Test</h5>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MentalHealthCategory;
