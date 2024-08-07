import React, { useState } from "react";
import { v4 as uuidv4, validate } from "uuid";
import { Toaster, toast } from "react-hot-toast";
import './JoinRoom.css';
import { useNavigate } from "react-router-dom";
import loader from "../../../../assets/loader.svg"

export default function JoinRoom() {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("");
    const [joining, setJoining] = useState(false);

    function handleRoomSubmit(e) {
        e.preventDefault();
        setJoining(true);

        // Validate Room ID
        if (!validate(roomId)) {
            toast.error("Incorrect room ID");
            setJoining(false);
            return;
        }

        // Navigate if username is provided
        if (username) {
            navigate(`/interview/professional/room/${roomId}?username=${username}`);
        } else {
            toast.error("Please enter a username");
            setJoining(false);
        }
    }

    function createRoomId() {
        try {
            setRoomId(uuidv4());
            toast.success("Room created");
        } catch (exp) {
            console.error(exp);
        }
    }

    return (
        <div className="joinBoxWrapper">
            <form className="w-full max-w-[500px] flex flex-col justify-center items-center gap-4 p-6 py-10" onSubmit={handleRoomSubmit}>
                <h1 className="font-semibold text-2xl">
                    Professional Interview
                </h1>

                <div className="joinBoxInputWrapper mt-7">
                    <input
                        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                        id="usernameInput"
                        type="text"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <div className="joinBoxInputWrapper">
                    <input
                        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                        id="roomIdInput"
                        type="text"
                        placeholder="Invite Code"
                        required
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        autoComplete="off"
                    />
                </div>

                <button
                    className="w-full mb-12 mt-4 text-light-1 bg-dark-1 transition-all p-3 rounded-xl disabled:cursor-not-allowed"
                    type="submit"
                    disabled={joining || username === "" || roomId === ""}
                >
                    {joining ?
                        <img src={loader} alt="Loading..." className="w-6 h-6 object-contain mx-auto" /> :
                        "Join"
                    }
                </button>

                <p>
                    Don't have an invite code? Create your{" "}
                    <span
                        style={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={createRoomId}
                    >
                        own room
                    </span>
                </p>
            </form>
            <Toaster />
        </div>
    );
}
