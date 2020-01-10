import React from "react";

const selectTable = (
    <div className="modal fade" id="myModalTable">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 className="modal-title">Import Google Contacts</h3>
                </div>
                <div className="modal-body">
                <h5 className="text-center">Please Select the Google Contacts you want to Import</h5>
                <table id="friendsoptionstable" className="table table-striped">
                    <thead>
                        <tr>
                            <th className="tablecell"  width="auto !important">Email</th>
                            <th className="tablecell">Name</th>
                            <th className="tablecell">Mobile</th>
                            <th className="tablecell">Import</th>
                        </tr>
                    </thead>
                    
                </table>
                <div/>
            </div>
            </div>
        </div>
    </div>
)


export default selectTable;