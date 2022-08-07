function App() {
    return (
      <div>
        <Person
          name="Jack Frost"
          age={40}
          hobbies={["freezing", "chilling", "melting"]}
        />
        <Person name="Emily Paris" age={31} hobbies={["drinking wine", "shopping"]} />
        <Person
          name="Walter White"
          age={50}
          hobbies={["cooking", "teaching"]}
        />
        <Person
          name="Jesse Pinkman"
          age={30}
          hobbies={["cooking", "driving", "drawing"]}
        />
      </div>
    );
  }
  