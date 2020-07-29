import React from "react";
import "./style.css";
import { ListItem } from "../List";

function Book(props) {
  return (
    <ListItem>
      <div className="card">
        <div className="row no-gutters">
          <div>
            <img className="float-left" src={props.image} alt={props.title} />
          </div>
          <div className="col-sm-10">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <h6 className="card-title">{props.authors}</h6>
              <p className="card-text">{props.description}</p>
              <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white"
              >
                View more
              </a>
              <props.button />
            </div>
          </div>
        </div>
      </div>
    </ListItem>
  );
}

export default Book;
