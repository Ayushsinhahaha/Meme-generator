import React, { useState } from "react";
import styles from "./styles.module.css";
import {  useNavigate, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export const MemeGenerated = () => {
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")} className={styles.home}>Make More Memes</button>
      {url && <img src={url} alt="img" />}
      <button onClick={copyLink} className={styles.copy}>
        {copied ? "Link copied!" : "Copy Link"}
      </button>
    </div>
  );
};
