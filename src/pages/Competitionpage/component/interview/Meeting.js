import React, { useRef, useState, useEffect } from "react";
import { JaaSMeeting } from "@jitsi/react-sdk";
import { useLocation } from "react-router-dom";

const Meeting = ({ roomId, username }) => {
  const JaasAppId = process.env.REACT_APP_JAAS_APP_ID || 'default_app_id'; // Add a fallback value
  const meetId = roomId;
  const apiRef = useRef(null);
  const [logItems, updateLog] = useState([]);
  const [knockingParticipants, updateKnockingParticipants] = useState([]);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('username');

  const professionalInterviewer = [
    { 
      name: "Abishek Kumar",
      rating: 9,
      professional: "Software Engineer",
      experience: "5 years",
      price: 499
    },
    { 
      name: "Gaurav Verma",
      rating: 8,
      professional: "Backend Developer",
      experience: "4 years",
      price: 499
    },
    { 
      name: "Rahul Agarwal",
      rating: 8,
      professional: "Frontend Developer",
      experience: "3 years",
      price: 499
    },
  ];

  const handleAudioStatusChange = (payload, feature) => {
    if (payload.muted) {
      updateLog((items) => [...items, `${feature} off`]);
    } else {
      updateLog((items) => [...items, `${feature} on`]);
    }
  };

  const handleJitsiIFrameRef1 = (iframeRef) => {
    iframeRef.style.border = "10px solid #3d3d3d";
    iframeRef.style.background = "#3d3d3d";
    iframeRef.style.height = "400px";
    iframeRef.style.width = "100%";
  };

  const printEventOutput = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
  };

  const handleKnockingParticipant = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
    updateKnockingParticipants((participants) => [
      ...participants,
      payload?.participant,
    ]);
  };

  const handleApiReady = (apiObj) => {
    apiRef.current = apiObj;
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
    apiRef.current.on("audioMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "audio")
    );
    apiRef.current.on("videoMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "video")
    );
    apiRef.current.on("raiseHandUpdated", printEventOutput);
    apiRef.current.on("titleViewChanged", printEventOutput);
    apiRef.current.on("chatUpdated", handleChatUpdates);
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
    apiRef.current.on("screenSharingStatusChanged", printEventOutput);
  };

  const handleChatUpdates = (payload) => {
    if (payload.isOpen || !payload.unreadCount) {
      return;
    }
    apiRef.current.executeCommand("toggleChat");
    updateLog((items) => [
      ...items,
      `you have ${payload.unreadCount} unread messages`,
    ]);
  };

  return (
    <div id="meet-page" className="flex flex-col items-center justify-center" style={{ overflowY: "scroll" }}>
      <div className="jitsi-component-div w-full" id="jaas-meet-video">
        <JaaSMeeting
          appId={JaasAppId}
          roomName={meetId}
          configOverwrite={{
            subject: "Video Call",
            hideConferenceSubject: true,
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
            enableClosePage: false,
            desktopSharingChromeExtId: null,
            toolbarButtons: [
              'camera',
              'fullscreen',
              'chat',
              'microphone',
              'hangup',
              'highlight',
              'participants-pane',
              'settings',
              'toggle-camera',
              'screen-sharing',
            ]
          }}
          onApiReady={(externalApi) => handleApiReady(externalApi)}
          getIFrameRef={handleJitsiIFrameRef1}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            SHOW_PROMOTIONAL_CLOSE_PAGE: false,
            SHOW_JITSI_WATERMARK: false,
            SCREENSHARING_ENABLED: true,
          }}
          userInfo={{
            displayName: userName
          }}
        />
      </div>
    </div>
  );
};

export default Meeting;
