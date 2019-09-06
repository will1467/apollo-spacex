import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LaunchItem extends Component {
    render() {
        let launch = this.props.launch;
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-9">
                        <h4>Mission: <span className={launch.launch_success ? 'text-success' : 'text-danger'}>{launch.mission_name}</span></h4>
                        <p>Date: {launch.launch_date_local}</p>
                    </div>
                    <div className="col-md-3">
                        <Link to={`/launch/${launch.flight_number}`} className="btn btn-secondary">Launch Details</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LaunchItem;