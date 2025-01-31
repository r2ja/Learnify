import React from "react";
import { Message } from "./components/Message";
import Navbar from "./Navbar"; // Reusable Navbar component
import styles from "./ChatLayout.module.css";

const ChatLayout = () => {
  const messages = [
    {
      content:
        "Rephrase 'This is an ai chatbot generated for better communication and simpler work flows'",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0d9c1284b7777ddea910cfdbff0a1ec88d78b93401e7da8f9f60c49d7f01ec?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
      isUser: false,
      accentColor: "#02040f",
    },
    {
      content: "Thank You :)",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/cd0d9c1284b7777ddea910cfdbff0a1ec88d78b93401e7da8f9f60c49d7f01ec?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
      isUser: false,
      accentColor: "#02040f",
    },
  ];

  const actionIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/012b4ee1648cd11739458ac189a9213ba95dcab4affa1ba9c9c9bde7b61e9fa2?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
      alt: "Send message",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c702a250f8573b94c8761a1c7db017d2e472bab47a31ec034fa1a70512255c9?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
      alt: "Attach file",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/707a876084a37ad235aef058e6e1bfd4b6e5c8cd2499924563273a84f60caa55?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703",
      alt: "More options",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Chat</h1>
            <div className={styles.searchContainer}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8540bc819485e4086797edb802742b0815daca83ee36979ca27344ca913fd5d1?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
                alt="Search"
                className={styles.searchIcon}
              />
              <input
                type="text"
                placeholder="Type here to search"
                className={styles.searchInput}
              />
            </div>
          </div>
          <div className={styles.headerRight}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/973896bf0c072bf41c8e6b94a82dfc39eda2ce153c07f7c568adba9dfafaba29?placeholderIfAbsent=true&apiKey=731e94bd1e004c13b41f7c516f681703"
              alt="Profile"
              className={styles.profileIcon}
            />
          </div>
        </header>

        {/* Message Container */}
        <div className={styles.messageContainer}>
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
        </div>

        {/* Floating Input Area */}
        <div className={styles.inputArea}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Type a new message here"
              className={styles.inputText}
            />
            <div className={styles.actionButtons}>
              {actionIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className={styles.actionIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChatLayout;