import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams, useLocation ,useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

function addPropsToReactElement(element, props) {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }
  return element;
}

function addPropsToChildren(children, props) {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, props);
  }
  return children.map((childElement, index) =>
    addPropsToReactElement(childElement, { key: index, ...props })
  );
}

export default function SocketWrapper({ children }) {
  const socket = io("https://quasar2-hack.onrender.com"); // Replace with your actual socket server URL

  const location = useLocation();
  const { roomId } = useParams();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get("username");

  const navigate = useNavigate(); // Replace useHistory with useNavigate in React Router v6

  useEffect(() => {
    function kickStrangerOut() {
      navigate("/", { replace: true });
      toast.error("No username provided");
    }

    if (username) {
      socket.emit("when a user joins", { roomId, username });
    } else {
      kickStrangerOut();
    }

    return () => {
      socket.disconnect();
    };
  }, [socket, username, roomId, navigate]);

  return username ? <div>{addPropsToChildren(children, { socket })}</div> : (
    <div className="room">
      <h2>No username provided. Please use the form to join a room.</h2>
    </div>
  );
}
