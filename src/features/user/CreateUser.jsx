import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  /*знов таки, імпорт діспатч як в юзконтекст хук, трохи інший  */
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    // просто прикол в тому, що тут використовується useState разом із цим
    // але це просто для того, щоб зберігати оновлене імʼя в інпуті
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Let`s start with your name:
      </p>

      <input
        className="input w-72 mb-6"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
