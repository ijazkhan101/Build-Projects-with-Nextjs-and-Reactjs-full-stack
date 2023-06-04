import { Todo } from  '../lib/drizzle';

const getData = async () => {
  try {
      const res = await fetch("http://127.0.0.1:3000/api/todo", {
          method: "GET",
          cache:"no-store",
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (!res.ok) {
          throw new Error("Failed to fetch the data")
      };
      const result = await res.json()
      return result
  } catch (err) {
      console.log(err)
  }
}

const TodoList = async () => {

  const res: { data: Todo[] } = await getData();


  return (

      <div className="max-h-[350px] overflow-auto mb-4 ">
          {
              res.data.map((item) => {
                  return (
                      <div className="flex items-center px-4 py-4 my-5 bg-gray-100 rounded-lg shadow gap-x-3">
                          {/* Circle */}
                          <div className="w-3 h-3 rounded-full bg-secondary"></div>
                          {/* Task Title */}
                          <p className="text-lg font-medium">{item.task}</p>
                      </div>
                  )
              })
          }

      </div>
  )
}

export default TodoList
