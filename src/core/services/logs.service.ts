import { ErrorLogOptions } from "../interfaces/error-log-options.interface";
export class Logs {
  static showError(error: ErrorLogOptions) {
    console.log(error);
    throw new Error(`
   {
  message: ${error.message};
  onFunction?: ${error.onFunction};
  onFile?: ${error.onFile};
  error?: ${error.error};
}
    `);
  }
}
