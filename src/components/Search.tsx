import Submit from "./Submit";

export default function Search() {
  return (
    <form action="#">
      <input
        className="dark:bg-blue-200 dark:border-blue-700 dark:border-solid bg-white p-1"
        type="text"
        name="keyword"
      />
      <Submit>검색</Submit>
    </form>
  );
}
