import { Context, storage } from "near-sdk-as"

// return the string 'hello <Your Name>'
export function helloWorld(): string {
  const predecessor = Context.predecessor
  return "hello " + predecessor
}

// export function helloWorldTask1(): string {
//   return "hello Muhammed"
// }

// export function helloWorldTask2(name: string): string {
//   return "hello" + name
// }

// export function helloWorldTask3(names: Array<string>): string {
//   return names.map<string>(name => "hello " + name).join("\n")
// }

// export function helloWorldTask4(): string {
//   const predecessor = Context.predecessor
//   return "hello " + predecessor
// }

// read the given key from account (contract) storage
export function read(key: string): string {
  if (storage.hasKey(key)) {
    return `✅ Key [ ${key} ] has value [ ${storage.getString(key)!} ]`
  } else {
    return `🚫 Key [ ${key} ] not found in storage. ( ${storageReport()} )`
  }
}

// write the given value at the given key to account (contract) storage
export function write(key: string, value: string): string {
  storage.set(key, value)
  return `✅ Data saved. ( ${storageReport()} )`
}

// private helper method used by read() and write() above
function storageReport(): string {
  return `storage [ ${Context.storageUsage} bytes ]`
}
