import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
        console.log(e.target.value)
    }

    onFromSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term : ""});
    }

    render() {
        return (
            <form onSubmit={this.onFromSubmit} className="input-group">
                <input placeholder="Get a 5 days forecast of your faviroute cities" value={this.state.term} className="form-control" onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
            )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

