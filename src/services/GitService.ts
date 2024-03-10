import { log } from "@clack/prompts";
import { execSync } from "child_process";
import colors from "picocolors";
import { ConventionalCommitType } from "../enum";

class Gitservice {
  static getInstance() {
    return new Gitservice();
  }

  /**
   * This TypeScript function `cleanCommitMessage` removes any trailing period from a commit message and
   * trims any extra whitespace.
   * @param {string} message - The `cleanCommitMessage` function takes a commit message as input and
   * removes any leading or trailing whitespace. It also removes a period at the end of the message if
   * present. If the message ends with a period, it trims the period and any additional whitespace before
   * returning the cleaned message. If the
   * @returns The `cleanCommitMessage` function returns a cleaned version of the input `message` string.
   * If the input message ends with a period, the function removes the period and trims any extra
   * whitespace before returning the cleaned message. If the input message does not end with a period, it
   * simply trims any leading or trailing whitespace and returns the message as is.
   */
  private cleanCommitMessage(message: string): string {
    const message_trimmed = message.trim();
    const remove_period = message_trimmed.endsWith(".");
    if (remove_period) {
      return message_trimmed.substring(0, message_trimmed.length - 1).trim();
    }
    return message.trim();
  }

  /**
   * The function `CreateCommitMessage` takes a message and a type as input and returns a cleaned commit
   * message by combining the type and message.
   * @param {string} message - The `message` parameter is a string that represents the actual content or
   * description of the commit message. It typically includes information about the changes made in the
   * commit.
   * @param {string} type - Type refers to the type of the commit message, such as "feat" for a new
   * feature, "fix" for a bug fix, "docs" for documentation changes, "style" for code style changes,
   * "refactor" for code refactoring, "test" for adding tests, and
   * @returns The function `CreateCommitMessage` returns a cleaned commit message that combines the
   * `type` and `message` parameters.
   */
  createCommitMessage(message: string, type: string) {
    let commitMessage = "";
    switch (type) {
      case ConventionalCommitType.FEATURE:
        commitMessage = `${type} feat: ${message}`;
        break;
      case ConventionalCommitType.FIX:
      case ConventionalCommitType.HOTFIX:
        commitMessage = `${type} fix: ${message}`;
        break;
      case ConventionalCommitType.DOCUMENTATION:
        commitMessage = `${type} docs: ${message}`;
        break;
      case ConventionalCommitType.REFACTOR:
        commitMessage = `${type} refactor: ${message}`;
        break;
      default:
        commitMessage = `${type} ${message}`;
        break;
    }
    return this.cleanCommitMessage(commitMessage);
  }

  /**
   * The function `initiateCommitProcess` commits changes to a Git repository with a specified message
   * and logs the outcome.
   * @param {string} message - The `message` parameter in the `initiateCommitProcess` function is a
   * string that represents the commit message that will be used when creating a new commit in the Git
   * repository. This message should provide a brief description of the changes being committed.
   */
  initiateCommitProcess(message: string) {
    try {
      const output = execSync(`git commit -m "${message}"`).toString().trim();
      log.info(output);
      log.success(colors.green("Files Committed Successfully 🎉"));
    } catch (e: any) {
      log.error(
        colors.red(
          e?.message ?? "Something went wrong while creating commit 😞"
        )
      );
      process.exit(0);
    }
  }
}

export const gitService = Gitservice.getInstance();
