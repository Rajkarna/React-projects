import React from "react";

function Addtodo() {
  return (
    <div>
      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="enter todo" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button className="btn btn-success _btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
