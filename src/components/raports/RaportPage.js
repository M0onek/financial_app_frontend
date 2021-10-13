import React from "react";
import DateFilter from "../DateFilter";
import RaportPreview from "./RaportPreview";
import ReactDOM from 'react-dom';

class RaportPage extends React.Component {

    print = () => {
        // const iframe = window.frames['raport-preview']
        // iframe.focus()
        // iframe.print()
        const baseURL = location.origin
        const raport = document.getElementById('raport-preview')
        const wnd = window.open(baseURL, 'PRINT')
        const doc = wnd.document

        doc.write()
        doc.write(`
        <html>
            <head>
                <meta charset="utf-8"/>
                <title>Raport</title>
                <link rel="stylesheet" href="/raport.css"/>
            </head>
            <body onload="window.print(); /*window.close();*/">
                ${raport.innerHTML}
            </body>
        </html>`
        )
        
        doc.close()
        wnd.focus()
    }

    render() {
        return (
            <div>
                <div className='summary'>
                    <div className='content-container'>
                        <h1 className='summary__title'>Raporty</h1>
                    </div>
                    <div className="summary--center">
                        <div className="flex">
                            <DateFilter showSortBy />
                            <button className="button" onClick={this.print}>
                                <span className="material-icons" style={{verticalAlign: 'middle'}}>print</span> <span style={{verticalAlign: 'middle'}}>Drukuj</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="content-container">
                    
                    <div id="raport-preview">
                        <RaportPreview/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RaportPage;
