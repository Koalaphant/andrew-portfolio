"use client";

export default function Form() {
  function testSubmission(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("email"));
  }

  return (
    <form onSubmit={testSubmission} method="post">
      <label>Email:</label>
      <input id="email" type="email" name="email" />
      <button type="submit">submit</button>
    </form>
  );
}
