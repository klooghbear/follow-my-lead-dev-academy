import React from "react"
import { register, isAuthenticated } from "authenticare/client"
import { postWalker } from "../api/users"
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

export class WalkerReg extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      blurb: "",
      city: "",
      email: "",
      photo: "",
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleSubmit(e) {
    e.preventDefault()
    register(
        {
          username: this.state.username,
          password: this.state.password,
        },
        {
          baseUrl: process.env.BASE_API_URL,
        },
    ).then((token) => {
      if (isAuthenticated()) {
        postWalker({
          first_name: this.state.firstName,
          last_name: this.state.lastName,
          blurb: this.state.blurb,
          photo: this.state.photo,
          city_name: this.state.city,
          email: this.state.email,
        })
      }
    }).then(() => {
      this.props.history.push("/login")
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <div>
        <Form className="form" onSubmit={(event) => this.handleSubmit(event)}>
          <div className="box">
            <FormGroup>
              <div className="image-container">
                <img className="logoform" src="/images/Logo2.png" alt="logo" />
              </div>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Username:</Label>
                <Input
                  className="input"
                  type="text"
                  name="username"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Password:</Label>
                <Input
                  className="input"
                  type="password"
                  id="pwd"
                  name="password"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Confirm password:</Label>
                <Input
                  className="input"
                  type="password"
                  id="confirm-pwd"
                  name="password"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>First name:</Label>
                <Input
                  className="input"
                  type="text"
                  name="firstName"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Last name:</Label>
                <Input
                  className="input"
                  type="text"
                  name="lastName"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>About:</Label>
              </Col>
              <Input
                className="textarea"
                type="textarea"
                name="blurb"
                onChange={(event) => this.handleChange(event)}
                autoComplete="off"
              />
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Email:</Label>
                <Input
                  className="input"
                  type="text"
                  name="email"
                  onChange={(event) => this.handleChange(event)}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Photo:</Label>
                <Input
                  className="input"
                  type="text"
                  name="photo"
                  onChange={(event) => this.handleChange(event)}
                  placeholder="add your image URL here..."
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Label>Location:</Label>
                <div className="input">
                  <select
                    className="form-select"
                    type="select"
                    name="city"
                    onChange={(event) => this.handleChange(event)}
                    autoComplete="off"
                  >
                    <option value="auckland">Auckland</option>
                    <option value="Hamilton">Hamilton</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Nelson">Nelson</option>
                    <option value="Christchurch">Christchurch</option>
                    <option value="Dunedin">Dunedin</option>
                    <option value="Queenston">Queenstown</option>
                    <option value="Invercargill">Invercargill</option>
                  </select>
                </div>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Button
                  className="button"
                  type="submit"
                  value="Submit"
                  autoComplete="off"
                >
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </div>
        </Form>
      </div>
    )
  }
}

export default WalkerReg
