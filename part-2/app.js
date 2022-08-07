function App() {
    return (
      <div>
        <Tweet
          name="Naomi Villegas"
          username="nvillegas"
          date={new Date().toDateString()}
          message="The world is dark."
        />
        <Tweet
          name="Joanasis Villegas"
          username="jvillegas"
          date={new Date().toDateString()}
          message="I love dogs."
        />
        <Tweet
          name="Ana Villegas"
          username="avillegas"
          date={new Date().toDateString()}
          message="Help me."
        />
      </div>
    );
  }
  