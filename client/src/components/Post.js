export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2023/07/GettyImages-1507106681.jpg?w=1390&crop=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Threads profile can only be deleted by deleting </h2>
        <p className="info ">
          <a className="author">manish</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Threads, Meta’s Twitter rival, is drawing users at an astounding pace,
          amassing 10 million signups in just seven hours, according to
          co-founder and chief executive Mark Zuckerberg.
        </p>
      </div>
    </div>
  );
};
