import React, {useState} from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
}
const Button = ({ children, color = "primary" }: Props) => {
    const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
        {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Alert</Alert>}
      <button className={"btn btn-" + color} onClick={()=>setAlertVisibility(true)}>
        {children}
      </button>
    </div>
  );
};

export default Button;
