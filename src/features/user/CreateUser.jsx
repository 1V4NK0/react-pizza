import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Let`s start with your name:
      </p>

      <input
      className="w-72 h-8"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
