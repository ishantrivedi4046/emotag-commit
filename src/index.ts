#! /usr/bin/env node

import { group, log, select, text } from "@clack/prompts";
import { COMMIT_TYPE_OPTIONS, DEFAULT_COMMIT_TYPE } from "./constant";
import { getCurrentDateTime } from "./helper";
import { gitService } from "./services/GitService";
import { CommitTypeOption } from "./types";

main();

/**
 * The main function in this TypeScript code prompts the user to enter a commit message and select a
 * commit type, then creates a final commit message based on the input and initiates the commit process
 * using a git service.
 */
export async function main() {
  const { commitMessage, commitType } = await group(
    {
      commitMessage: () =>
        text({
          message: "Enter Commit Message :",
          defaultValue: `${DEFAULT_COMMIT_TYPE} Commit added on ${getCurrentDateTime()}`,
          validate: (v) => {
            if (v?.length > 72) {
              return "Commit message exceeded maximum length of 72 😡";
            }
          },
        }),
      commitType: () =>
        select<CommitTypeOption[], string>({
          message: "Select Commit Type :",
          options: COMMIT_TYPE_OPTIONS,
        }),
    },
    {
      onCancel: () => {
        log.error("Git commit process cancelled 💔");
        process.exit(0);
      },
    }
  );

  const finalCommitMessage = commitMessage?.includes(DEFAULT_COMMIT_TYPE)
    ? commitMessage
    : gitService.createCommitMessage(commitMessage, commitType);

  gitService.initiateCommitProcess(finalCommitMessage);
}
