import { ErrorLogOptions } from "../interfaces/error-log-options.interface";
/**
 * Show a console error, throw one or both.
 * @class Logs
 * @author Ezequiel López
 */
export class Logs {
  /**
   * Displays an error in the console and optionally throws it as an exception.
   * @param {ErrorLogOptions} error - Object containing error information.
   * @param {string} error.message - The error message.
   * @param {string} [error.onFunction] - The function where the error occurred.
   * @param {string} [error.onFile] - The file where the error occurred.
   * @param {Error} [error.error] - The original error object.
   * @param {boolean} [error.throw=false] - Indicates whether to throw an exception with the error.
   * @throws {Error} If the throw parameter is true.
   */

  static showError(error: ErrorLogOptions) {
    const errorMessage = `{
              message: ${error.message};
              onFunction?: ${error.onFunction};
              onFile?: ${error.onFile};
              error?: ${error.error};}`;

    console.log(error);
    if (error.throw) throw new Error(errorMessage);
  }
}
