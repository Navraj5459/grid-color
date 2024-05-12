import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import ListGroup from "./Components/ListGroup";
import Button from "./Components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handlerSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handlerSelectItem}
        />
      </div>
      <Button color="success">Submit</Button>
    </>
  );
}
export default App;
