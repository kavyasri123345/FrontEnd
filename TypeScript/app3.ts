function identity<T>(arg: T): T {
    return arg;
  }
  
  console.log(identity(42));       
  console.log(identity("hello"));  

   enum Direction {
    Up = 1,
    Down,
    Left,
    Right
  }
  
  let move: Direction = Direction.Up;
  console.log(move); 
  
   function printId(id: string | number): void {
    console.log(`ID: ${id}`);
  }
  
  printId("123");
  printId(456);
  