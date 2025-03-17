# Environment Variables & Shell Configuration

This guide covers environment variables, shell variables, and aliases.

## Viewing environment variables

Environment variables store system-wide settings and configurations.

- Print all environment variables:
  ```bash
  printenv  # Displays all environment variables
  ```
- View a specific variable:
  ```bash
  echo $USER # Prints the current logged-in user
  ```

## Creating & using variables

Shell variables are local to the current session, while environment variables persist across processes.

- Define a shell variable:
  ```bash
  mynum=45  # Creates a shell variable named 'mynum'
  ```
- Export a variable to make it available to child processes:
  ```bash
  export mynum=45  # Makes 'mynum' an environment variable
  ```
- Verify the variable:
  ```bash
  echo $mynum  # Prints the value of 'mynum'
  ```

## Creating Aliases

Aliases create shortcuts for frequently used commands.

- Define a simple alias:
  ```bash
  alias greet='echo Hello World'  # Creates an alias 'greet' that prints 'Hello World'
  ```
- Use the alias:
  ```bash
  greet  # Outputs 'Hello World'
  ```
- Check the type of a command (built-in, alias, function, or executable):
  ```bash
  type greet # Shows that 'greet' is an alias
  ```

💡 **Tip**: To make an alias permanent, add it to `~/.bashrc` or `~/.bash_profile`.
