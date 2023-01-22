//* Import Necessary Methods from Pinia
import { defineStore } from 'pinia'

//* Store Instance Definition
const useAppStore = defineStore('App' ,{
  state: () => {
    //* State
    //  It is a plain object to declare the default state of the application.
    return {
      Tasks: [],
    }
  },
  actions: {
    //* Actions:
    //  Like getters, actions get access to the whole store instance through 
    //  this keyword. Unlike getters, actions can be asynchronous, you can await
    //  inside of actions any API call or even other actions! 
    AddTask(Task){
      this.Tasks.push(Task);
    }
  },
  getters: {
    //* Getters
    //  Getters are exactly the equivalent of computed values for the state of a Store.
    //  Usually they are declared as Arrow Functions with State as their Input Parameter.
    doneTask: (state) => {
      return {
        DoneTasks: state.Tasks.filter(Task => Task.done),
      }
    },
  },
});

export { useAppStore };