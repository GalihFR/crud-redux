import React, { Component } from 'react';
import BackComponent from '../components/BackComponent';
import { connect } from 'react-redux';
// import axios from 'axios';

class TesUploadImage extends Component {
    state = {
        selectImage: null
    }

    selectImageHandler = (e) => {
        console.log(e.target.files[0]);
        // this.setState({
        //     selectImage: e.target.files[0]
        // })
    }

    uploadImageHandler = () => {
        alert('Untuk sementara waktu features ini masih dalam tahap develop')
    }


    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group">
                        <label for="lastName">Lass Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="form-group">
                        <label for="age">Age</label>
                        <input type="text" className="form-control" id="age" />
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="imageProfile" onChange={this.selectImageHandler} />
                        <label className="custom-file-label" for="imageProfile">Choose image</label>
                    </div>
                    {/* <div className="form-group">
                        <label for="imageProfile">Upload Image</label>
                        <input type="file" className="form-control-file" id="imageProfile" onChange={this.selectImageHandler} />
                    </div> */}
                    <div className="form-group" style={{marginTop:'20px'}}>
                        <button type="submit" className="btn btn-primary" onClick={this.uploadImageHandler} style={{ borderRadius: '20px' }}>Submit</button>
                        <BackComponent />
                    </div>
                </form>
            </div>
        )
    }
}

export default connect()(TesUploadImage);