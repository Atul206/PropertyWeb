import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const translationsData = require('./property_data.js');
const translationsData2 = require('./property_data_2.js');
const translationsData3 = require('./property_data_3.js');
const translationsData4 = require('./property_data_4.js');
const translationsData5 = require('./property_data_5.js');
const translationsData6 = require('./property_data_6.js');
const translationsData7 = require('./property_data_7.js');
const translationsData8 = require('./property_data_8.js');
const translationsData9 = require('./property_data_9.js');
const translationsData10 = require('./property_data_10.js');
const translationsData11 = require('./property_data_11.js');

var datVal = 0;
var item = "00017411";

var selectedOptions = null;


class App extends Component {

    constructor(props) {
        super(props);
        // noinspection JSAnnotator
        this.state = {
            data: [],
            keys:[],
            auth:[],
            isDownloaded:true
        };

        this.handleChange = this.handleChange.bind(this);
    }


    onClick() {

    }


    async componentDidMount() {

    }

    async downloadData(){
        var filterData = []
        var data = translationsData;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData2;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData3;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData4;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData5;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData6;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData7;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData8;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData9;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData10;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        data = translationsData11;//firebaseObject.database().ref('AuthUser').orderByKey();
        data.forEach((data) => {
            filterData.push(data);
        });
        var areaMap = new Map(filterData.map(i => [i.area_name, i]));
        let keys = Array.from(areaMap.keys());
        console.log("keys");
        console.log(keys);
        selectedOptions = keys[0];
        this.setState({
                finalData:filterData,
                data:filterData,
                keys:keys,
                isDownloaded: true,
                downloadUrl: null,
                value:null
            }
        );
    }

    handleChange(selectedOption) {
        console.log(selectedOption);
        var filterData = []
        var da = this.state.data;//firebaseObject.database().ref('AuthUser').orderByKey();
        da.forEach((da) => {
            if(da.area_name === selectedOption.value){
                filterData.push(da);
            }
        });
        this.setState({
                finalData:filterData,
                isDownloaded: true,
                downloadUrl: null,
                value:null
            }
        );
    }

    render() {

        return ((this.state.isDownloaded) ?
            <div className="App" style={styles.backgroundImg}>
                <button className='float-right' style={styles.ActionButton}
                        onClick={() => this.downloadData()}> Download
                </button>

                <Dropdown options={this.state.keys}  onChange={this.handleChange} value={selectedOptions} placeholder="Select an option" />

              <ReactTable
                    data={this.state.finalData}
                    columns={[{
                        id:'propertyId',
                        Header: 'PropertyId',
                        accessor: d => d.property_Id // String-based value accessors!
                    }, {
                        id:'ownerName',
                        Header: 'Owner Name', // Required because our accessor is not a string
                        accessor: d => d.owner_name,
                    },{
                        id:'mobileNo',
                        Header: 'Remark/Mobile', // Required because our accessor is not a string
                        accessor: d => d.Mobile,
                    },{
                        id:'area_name',
                        Header: 'Area Name', // Required because our accessor is not a string
                        accessor: d => d.area_name,
                    },
                        {
                            id:'downloadUrl',
                            Header: 'Photos',
                            accessor: d => d.url,
                            Cell: props => <img style={styles.image} src={props.value} className='photo'/>
                        }]
                    }
                    className="-striped -highlight"
                    showPaginationTop
                    showPaginationBottom
                    defaultPageSize={1000}
            />
            </div>
                :
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Please wait, fetching data..</h1>
                </header>
                </div>
        );
    }
}

const styles = {
    ActionButtonContainor: {
        flex: 1,
        justifyContent: 'right',
        alignSelf: 'right'
    },

    ActionButton: {
        justifyContent: 'space-between',
        backgroundColor: '#19b985',
        alignItems: 'center',
        padding: 2,
        borderRadius: 4,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    ActionButtonText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        width: 100,
        height: 20,
    }


}
export default App;
