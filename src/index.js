import React from "react";
import { render } from "react-dom";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "./index.css";
import data from "./data.json";
// import selectTable from './table'

// import { Button } from 'react-bootstrap'
// import Modal from 'react-bootstrap/Modal'
// const body_ = document.querySelector("body");

const modalBody = document.getElementsByClassName("modal-body")

let selectedNodes_ = [];

const onChange = (currentNode, selectedNodes) => {

  let list = [];

  console.log("path::", currentNode.path);

  console.log(currentNode);

  selectedNodes.map(n => {

    return (list.push(n.tagClassName))

  })

  selectedNodes_ = list;

  console.log(selectedNodes_);

};


const assignObjectPaths = (obj, stack) => {

  Object.keys(obj).forEach(k => {

    const node = obj[k];

    if (typeof node === "object" && node !== null) {

      node.path = stack ? `${stack}.${k}` : k;

      assignObjectPaths(node, node.path);

    }

  });

};

const openDialogue = (list, sl) => {

  let text_ = "";

  sl.forEach(s => {

    text_ += s + "\n"

  })

  const plainText = text_;

  console.log(plainText);

  modalBody[0].innerHTML = plainText;

  console.log(modalBody[0].innerText);

  console.log(list);
}

const getSelectedOperators = () => {

  let list = [];

  let listItemsContent = document.querySelectorAll(".tag");

  listItemsContent.forEach(i => {

    let iText = i.textContent;

    iText = iText.slice(0, -1);

    list.push(iText);

  });

  let sl = selectedNodes_;

  openDialogue(list, sl);


}

const onAction = (node, action) => {

  console.log('onAction::', action, node)

}

const onNodeToggle = currentNode => {

  console.log('onNodeToggle::', currentNode)

}



const selectAll = () => {

  console.log("All selected");

  onChange([], data)

}


const selectNone = () => {

  console.log("None selected");

  onChange([], [])

}

const App = () => {

  assignObjectPaths(data);

  return (

    <div>

      <div className="tableHeader">

        <div> <h4>OPERATOR</h4></div>

        <div>

          <b>Select </b>

          <b onClick={selectAll}>all </b>/

          <b onClick={selectNone}> none</b>

        </div>

      </div>

      <div className="tableContent">

        <DropdownTreeSelect
          data={data}
          onChange={onChange}
          onAction={onAction}
          onNodeToggle={onNodeToggle}
          className="bootstrap-demo"
        />

        <button type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={getSelectedOperators}
        >
          Grab Selected
        </button>

      </div>

    </div>

  );

};

render(<App />, document.getElementById("root"));
