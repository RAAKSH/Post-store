import React, { Component } from 'react';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom';

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
          name:'',
          email:'',
          password:''
        }
      }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };
    handlePwdChange = event => {
        this.setState({ password: event.target.value });
    };
    handleNameChange = event => {
        this.setState({ name: event.target.value });
    };

    onSubmit = (e) =>{
        let ob = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        }
        let olddata = localStorage.getItem('formdata');
        if(olddata==null){
          olddata = []
          olddata.push(ob)
          localStorage.setItem('formdata', JSON.stringify(olddata));
        }else{
          let oldArr = JSON.parse(olddata)
          oldArr.push(ob)
          localStorage.setItem("formdata", JSON.stringify(oldArr))
        }
        alert("User Registered Successfully and please Login In to Continue");
      }
    

    render() {
        console.log("this",this.props);
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <div className="card card-login mx-auto mt-5">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="text" id="inputName" className="form-control" placeholder="name"  name="name" onChange={this.handleNameChange} required/>
                                    <label htmlFor="inputName">Name</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <input id="inputEmail" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email. or Email Exis
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="******"  name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Register &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'/'}>Login Your Account</Link>
                        </div>
                    </div>
                </div>
              
            </div>
        );
    }
}


