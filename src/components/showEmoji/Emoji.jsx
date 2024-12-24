import React from "react";
import Picker from "emoji-picker-react";

function Emoji({ emojiClick }) {
  return (
    <Picker
      theme="auto"
      emojiStyle="apple"
      skinTonePickerLocation="PREVIEW"
      onEmojiClick={emojiClick}
      width={"100%"}
    />
  );
}

export default Emoji;
