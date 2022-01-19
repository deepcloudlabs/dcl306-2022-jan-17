function Market() {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Market Dashboard</h4>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="symbol" className="form-label">Symbol:</label>
                        <select id="symbol" className="form-select">
                            <option>BTCUSDT</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="windowSize" className="form-label">Window Size</label>
                        <select id="windowSize"
                                className="form-select">
                            <option label="10" value="10">10</option>
                            <option label="25" value="25">25</option>
                            <option label="50" value="50">50</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">Start</button>
                        <button className="btn btn-danger">Stop</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Market;
